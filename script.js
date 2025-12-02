document.getElementById("uploadBtn").onclick = async function () {

  let file = document.getElementById("fileInput").files[0];
  let type = document.getElementById("printType").value;

  if (!file) {
    alert("Please select a PDF file first.");
    return;
  }

  document.getElementById("result").innerHTML = "Uploading... Please wait.";

  // Generate Print ID
  let printID = "P" + Math.floor(100000 + Math.random() * 900000);

  try {
    // Upload file to Firebase Storage
    let storageRef = storage.ref("print_jobs/" + printID + "/" + file.name);
    await storageRef.put(file);

    // Save job metadata in Firestore
    await db.collection("print_jobs").doc(printID).set({
      filename: file.name,
      printType: type,
      status: "uploaded",
      timestamp: Date.now()
    });

    // Display Print ID to user
    document.getElementById("result").innerHTML =
      `Your Print ID is: <b>${printID}</b><br>
       Use this ID at the printer to fetch your document.`;

  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML =
      "Error uploading file. Check console for details.";
  }
};
