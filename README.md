# automated-emailwith-pdf
Developed an automated system where, upon submission of a Google Form:  A personalized certificate (PDF) is generated and emailed to the respondent.  A custom WhatsApp message link is created for the user to directly message with one click.
# 🏆 Automated Certificate Generator via Google Forms, Email, and WhatsApp

This project automates the process of:
1. Collecting responses via Google Forms.
2. Generating a personalized certificate (PDF).
3. Uploading the certificate to Google Drive.
4. Emailing the certificate to the respondent.
5. Creating a WhatsApp message with the Drive link.

## 🚀 Tech Stack
- Google Forms
- Google Sheets
- Google Apps Script
- Google Drive API
- WhatsApp web link (`wa.me`)

## 📷 Workflow Overview

1. User submits a Google Form.
2. Google Apps Script triggers on form submission.
3. Script:
   - Uses a certificate template.
   - Fills in user data.
   - Generates a PDF.
   - Uploads it to Google Drive.
   - Sends email to user with the attached certificate.
   - Creates a WhatsApp message with Drive link.
4. User clicks the WhatsApp link and shares the certificate.

## 📁 Files
- `Code.gs`: Google Apps Script file (backend automation).
- `certificate_template.png`: Sample certificate layout.
- `sample_google_form_link.txt`: Example of the Google Form URL.
- `sample_output_email.txt`: Sample automated email message.

## 📎 Example WhatsApp Message Format
```plaintext
Hi [Name], here is your participation certificate: https://drive.google.com/file/d/xyz123/view?usp=sharing
