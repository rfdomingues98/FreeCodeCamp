var _name = "timeline.txt";

function readFile() {
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", _name, true);
  txtFile.onreadystatechange = function () {
    if (txtFile.readyState === 4) {
      // Makes sure the document is ready to parse.
      if (txtFile.status === 200) {
        // Makes sure it's found the file.
        allText = txtFile.responseText;
        lines = txtFile.responseText.split("\n"); // Will separate each line into an array
        var ul = document.getElementById("tribute-info");
        for (var i = 0; i < lines.length; i++) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(lines[i]));
          ul.appendChild(li);
        }
      }
    }
  };
  txtFile.send(null);
}

readFile();