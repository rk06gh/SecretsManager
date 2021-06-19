import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  rulepoints: any = null;

  constructor() { 
    this.rulepoints = [
      {"Point": "If you either deal with a lot of secrets/ credentials or if you find it difficult to remember all those secrets/ credentials, then this app will help you."},
      {"Point": "Almost every internal design details we are trying to make public, to make the user's feel confident while using the app."},
      {"Point": "You can store secrets (like password of different websites, servers, services etc. or any payment card details)."},
      {"Point": "It is an offline app and it never exchanges the stored data over Internet. "},
      {"Point": "Do not ever give access of this app, to anyone else."},
      {"Point": "Maximum length for each field is 40 characters."},
      {"Point": "It relies on the local storage of your device. Do not reset the app/ clear the storage used by this app, or else all stored data will be lost."},
      {"Point": "Data is stored in an encrypted form (the password to open this app, also known as the Access Password, is used for the encryption of the data). App never stores the Access Password, only its one-way hash is stored on your device locally.  It encrypts only primary value and secret value fields. Other fields are stored in plain text (unencrypted)."},
      {"Point": "It is always better to store any sensitive data in scrambled or non-guessable form, and same applies here too. It is strongly advised to store sensitive fields in a non-guessable form and to avoid storing exact actual ones. The form chosen must be such that only you can convert it to an usable form, without forgetting."},
      {"Point": "Access password for this app must be kept safely and securely. If you forget it, all the stored data will become useless, and you will need to populate the data afresh. Backup file will not be helpful, as the backup file being encrypted, during restore operation, it requires the same Access Password, which was used while taking the backup."},
      {"Point": "Being an offline app, it can't send an email or OTP to recover your forgotten Access Password. Remember your Access Password very well and don't forget it ever."},
      {"Point": "Backups generated by this app are ecrypted using the current Access Password, still t must be handled wisely like (a) to not upload it online under any circumstance (b) to permanently delete from device, once there is no requirement of the backup file (c) double check that any backup files is not accidentally present on your phone, before disposing it off or reselling, to avoid any potential misuse (d) Hard reset of the device (low level formatting) is highly recommended before disposing the device/ reselling, etc."},
      {"Point": "If you use the 'copy to clipboard' feature, be aware that the copied text will remain available in your clipboard, even when you close this app, and you must clear it manually or through any suitable mean. This text will also be encrypted one, using your current Access Password, but still recommended to take proper safety measures."},
      {"Point": "You must enable and set a strong method of lock (pattern or password) for your device. It will help you prevent the unauthorized access to the stored data, in case of theft or loss of device. Still, in such a situation, it is highly recommended to wipe the device remotely as soon as possible."},
      {"Point": "Apart from the Ionic platform and Angular framework, other main libraries/ tools used in this app are:- (1) JQuery (2) Bootstrap (3) crypto-js (4) js-sha512 (5) ngx-papaparse.js."},
      {"Point": "User is solely responsible for any kind of loss or damage, arising directly or indirectly by using this app. Developement team isn't responsible in any way, under any circumstance. Compliance to any applicable local law and regulations is the user's responsibility."},
      {"Point": "If you are using this app, you are (a) willingly agree to and abide by all these terms (at a minimum) and (b) willing to take all the risks associated and (c) agreeing that development team is not responsible for any kind of loss caused to you by using this app, directly or indirectly."}
    ];
  }

  ngOnInit() {
  }

}
