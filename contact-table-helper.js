contactsApp.contactTableHelper = (function () {

    function deleteTableRows(table) {
        var rowsToDelete = table.rows.length <= 1 ? 0 : table.rows.length;
        if (!rowsToDelete) {
            return;
        }
        for (var i = 1; i < rowsToDelete; i++) {
            table.deleteRow(1);
        }
    }

    function insertCellToRow(row, cellContent, cellIndex) {
        var cell = row.insertCell(cellIndex);
        cell.innerHTML = cellContent;
        cell.className = 'mdl-data-table__cell--non-numeric'
    }

    return {
        rebuildTableWithContacts: function (table, contacts) {

            deleteTableRows(table);
            table.tBodies[0].innerHTML = '';

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