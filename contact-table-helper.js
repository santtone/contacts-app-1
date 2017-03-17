contactsApp.contactTableHelper = (function () {
    return {
        rebuildTable: function (tableId, contacts) {

            var table = document.getElementById(tableId);
            table.tBodies[0].innerHTML = '';

            function insertCellToRow(row, cellContent, cellIndex) {
                var cell = row.insertCell(cellIndex);
                cell.innerHTML = cellContent;
                cell.className = 'mdl-data-table__cell--non-numeric'
            }

            for (var i = 0; i < contacts.length; i++) {
                var row = table.insertRow(i + 1);
                insertCellToRow(row, contacts[i].firstName, 0);
                insertCellToRow(row, contacts[i].lastName, 1);
                insertCellToRow(row, contacts[i].phone, 2);
                insertCellToRow(row, contacts[i].address, 3);
            }
        }
    }
})();