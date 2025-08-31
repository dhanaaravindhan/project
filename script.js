document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Instead of sending to a server, just simulate
  document.getElementById('response').innerText =
    "✅ Your application has been submitted (demo only).";
});
