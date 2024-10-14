let bcc, i, j;
bcc= "<table border='1' width='300'>";
for (i = 1; i <= 10; i++) {
    bcc += "<tr>";
    for (j = 1; j <= 10; j++) {
        bcc += "<td>"+j+"*"+i+"="+i*j+"</td>";
    }
    bcc += "</tr>";
}
bcc+= "</table>";
document.write(bcc);