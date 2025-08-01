## code used in google scripts

const TEMPLATE_ID = "1KI4sGh6JZGusXTzxSz__zlvkOGY7gYV4tWB8r0B3khw";
const DEST_FOLDER_ID = "1dgb-Rr99ld9yp9EcJ7VUeGUKVwstzS98"; 
function onFormSubmit(e) {
  const headers = e.source.getSheetByName('Form Responses 1').getDataRange().getValues()[0];  
  const row    = e.values;  
  const data   = {};  
  headers.forEach((h, i) => data[h] = row[i]);  

  const copy = DriveApp.getFileById(TEMPLATE_ID)
    .makeCopy(`Certificate_${data.Name}`, DriveApp.getFolderById(DEST_FOLDER_ID));  

  let doc  = DocumentApp.openById(copy.getId());  
  let body = doc.getBody();  

  body.replaceText('{{Name}}', data.Name);  
  body.replaceText('{{Domain}}', data.Domain);  
  body.replaceText('{{Months}}', data.Months);  
  body.replaceText('{{Date}}', data.Date);
  
  doc.saveAndClose();  

  const pdf = DriveApp.getFileById(copy.getId()).getAs('application/pdf');
  const file = DriveApp.getFileById(copy.getId());  

  // Set the file's sharing settings (for public URL generation)
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);  
  const publicUrl = "https://drive.google.com/uc?export=download&id=" + copy.getId();
  MailApp.sendEmail({
    to:      data.Email,
    subject: 'Your Internship Certificate',
    htmlBody:
    `<p>Dear ${data.Name},</p>
     <p>Please find your internship certificate below.</p>
     <p>Best,<br>Team</p>
     <hr>
     <p><strong>Certificate Link:</strong><br>
     <a href="${publicUrl}">${publicUrl}</a></p>`,
     attachments: [pdf]
  });
  const sheet = e.source.getSheetByName('Form Responses 1'); 

  const message = `Hi ${data.Name}, your certificate is ready: ${publicUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const phone = "+91 "+data.Phone
  const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  const linkColumnIndex = 9; // Assuming 'WhatsApp Link' is column 8
  sheet.getRange(sheet.getLastRow(), linkColumnIndex).setValue(waUrl);
  
  DriveApp.getFileById(copy.getId()).setTrashed(true);

}
