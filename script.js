document.getElementById("uploadBtn").onclick = async function () {

  let file = document.getElementById("fileInput").files[0];
  let type = document.getElementById("printType").value;

  if (!file) {
    alert("Please select a PDF file.");
    return;
  }

  // 1. Generate Print-ID
  let printID = "P" + Math.floor(100000 + Math.random() * 900000);

  // 2. Upload file to Firebase Storage
  let storageRef = storage.ref("print_jobs/" + printID + "/" + file.name);
  await storageRef.put(file);

  // 3. Save metadata in Firestore
  await db.collection("print_jobs").doc(printID).set({
    filename: file.name,
    printType: type,
    status: "pending",
    timestamp: Date.now()
  });

  // 4. Show Print-ID to user
  document.getElementById("result").innerHTML =
    "Your Print ID is: <b>" + printID + "</b><br>Use this at the printer.";

};
