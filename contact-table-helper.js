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
            _.forEach(contacts, function(c, i){
                var row = table.insertRow(i + 1);
                insertCellToRow(row, c.firstName, 0);
                insertCellToRow(row, c.lastName, 1);
                insertCellToRow(row, c.phone, 2);
                insertCellToRow(row, contactsApp.utils.buildGoogleMapsLink(c.address), 3);
            });
        }
    }
})();