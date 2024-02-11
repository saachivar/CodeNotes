function onOpen() {
  // Create the menu when the document is opened
  addMenu();
}

function addMenu() {
  var ui = DocumentApp.getUi();
  var menu = ui.createAddonMenu();
  
  // Add a menu item to the menu
   menu.addItem('Show Sidebar', 'openSidebar')
 
  
  // Show the menu in the extensions menu
  menu.addToUi();

}


function openSidebar() {
   // Create HTML content for the dialog
  var html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle("CodeNotes")
    .setWidth(300);

   // Display the sidebar
  DocumentApp.getUi().showSidebar(html);
} 

function changeFontAtCursor() {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  
  if (cursor) {
    var element = cursor.getElement();
    var offset = cursor.getSurroundingTextOffset();
    
      // Get the text element at the cursor position
      var text = element.asText();

      // Insert a space before the cursor position
        text.insertText(offset, '/');
     
        // Increment the offset to point to the space just inserted
             
      // Set the font family for the text at the cursor position
      text.setFontFamily(offset, offset, 'Courier New');
    
  }
}

function blockFunction () {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  if (cursor) {
    var element = cursor.getElement();
    var offset = cursor.getSurroundingTextOffset();
    var text = element.asText();
    for (var i = 0; i < 160; i++) {
      text.insertText(offset, ' ')
    }
  }

}
function revert() {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  
  if (cursor) {
    var element = cursor.getElement();
    var offset = cursor.getSurroundingTextOffset();
    
      // Get the text element at the cursor position
      var text = element.asText();

      // Insert a space before the cursor position
        text.insertText(offset, '/');
        
        // Increment the offset to point to the space just inserted
      
      // Set the font family for the text at the cursor position
      text.setFontFamily(offset, offset, 'Arial');
    
  }
}





