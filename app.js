let Inbox = document.querySelector('.inbox');
let viewEmail = document.querySelector('.view_email');
let deleted = document.querySelector('.deleted');
let picMail = document.querySelectorAll('.pic_mail');
let Mails = document.querySelectorAll('.mails');
let mail = document.querySelectorAll('.mail');
let mainSection = document.querySelector('.main_section');
let deletedSection = document.querySelector('.deleted_section');

let mail1 = { mainText: 'Заголовок письма 1', Text: 'Текст письма 1'};
let mail2 = { mainText: 'Заголовок письма 2', Text: 'Текст письма 2'};
let mail3 = { mainText: 'Заголовок письма 3', Text: 'Текст письма 3'};

let MAILS = [mail1, mail2, mail3]

let Deleted = []


Inbox.onclick=function () {

      mainSection.innerHTML ='';
      mainSection.classList.remove('main_section_del');
      deletedSection.classList.add('main_section_del');
	
      for (let m of MAILS) {
	         let mailContainer = document.createElement('div');
	             mailContainer.className = 'mails';
               mainSection.appendChild(mailContainer);

           let mailContent = document.createElement('div');
	             mailContent.className = 'mail';
               mailContainer.appendChild(mailContent);
               mailContent.textContent=m.mainText;    

           let buttonMail = document.createElement('button')
	             buttonMail.className = 'pic_mail';
               mailContainer.appendChild(buttonMail);     

           let buttonDel = document.createElement('button');
	             buttonDel.className = 'pic_del';
               mailContainer.appendChild(buttonDel);
    
      buttonMail.onclick=function () {
    	        viewEmail.classList.add('view_email_1');
              viewEmail.textContent='view email';
    	        mainSection.innerHTML ='';
          let mailContainer = document.createElement('div');
              mailContainer.className = 'mails';
              mainSection.appendChild(mailContainer);
          let mailContent = document.createElement('div');
              mailContent.className = 'mail_del';
              mailContainer.appendChild(mailContent);
              mailContent.textContent=m.Text;    
          let buttonBack = document.createElement('button');
              buttonBack.className = 'pic_mail_back';
              mailContainer.appendChild(buttonBack);
    	        Inbox.classList.remove('view_email_1')
              buttonBack.onclick = function () {
                     Inbox.onclick()
                     viewEmail.textContent='';}
       }
      buttonDel.onclick=function () {
    	        Deleted.push(m);
    	        MAILS.splice(MAILS.indexOf(m), 1);
    	       	mailContainer.remove();}

      viewEmail.classList.remove('view_email_1');
      Inbox.classList.add('view_email_1');
      deleted.classList.remove('deleted_back');
        
 } } 


 deleted.onclick=function () {

         mainSection.classList.add('main_section_del');
         deletedSection.classList.remove('main_section_del');
         deletedSection.innerHTML =''

         for (let m of Deleted) {
              let mailContainer = document.createElement('div');
	                mailContainer.className = 'mails';
                  deletedSection.appendChild(mailContainer);
              let mailContent = document.createElement('div');
	                mailContent.className = 'mail';
                  mailContainer.appendChild(mailContent);
                  mailContent.textContent=m.mainText;    
              let buttonRest = document.createElement('button')
	                buttonRest.className = 'pic_rest'
                  mailContainer.appendChild(buttonRest);

        buttonRest.onclick=function () {
    	          MAILS.push(m);
    	          Deleted.splice(Deleted.indexOf(m), 1);
    	         	mailContainer.remove();}

        viewEmail.classList.remove('view_email_1');
        Inbox.classList.remove('view_email_1');
        deleted.classList.add('deleted_back');
 } }