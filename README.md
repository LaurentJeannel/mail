# mail
 envoie de Gmail
sources : https://edigleyssonsilva.medium.com/how-to-send-emails-securely-using-gmail-and-nodejs-eef757525324

1)Accédez à https://myaccount.google.com/ et dans la barre latérale gauche, cliquez sur Sécurité, recherchez « Connexion à Google » , cliquez sur Vérification en 2 étapes et activez-la.

2)Après avoir activé la vérification en deux étapes, vous verrez dans la même page une autre option qui est Mots de passe des applications . Cliquez sur cette option et vous verrez une page


— Mots de passe des applications
Pour créer un nouveau mot de passe d'application, cliquez sur la liste déroulante "Sélectionner l'application" , sélectionnez Autre , définissez un nom ====>>> nodemailer <======= et cliquez dans Générer. Une boîte de dialogue apparaîtra avec le mot de passe. !!!! recopiez le !!!!!


— Nouveau mot de passe d'application généré
Remplacez le mot de passe que vous avez dans le code mail.js pass: et vous avez terminé. Vous pouvez désormais désactiver l'option « Applications moins sécurisées » et gérer les mots de passe de vos applications.

lancez Jarvis IA

phrase dans le xml

les data sont modifiables ....

version de base pour envoyer une alerte sur tout appareils connectés avec gmail
smatphone tablette ....

possiblilités :

plusieurs destinataires 
data.mailto="11111.gmail.com,22222222.gmail.com"

////

changer le sujet du mail
data.subject="urgent"

changer le texte
data.mailtext="bla bla bla"

envoie d'une image
data.filename="IMG_0029.JPG";data.mailpath="C:/Users/Administrator/Pictures/IMG_0029.JPG"

peut etre automatisé sous mail.js

un ask me par exemple pour les adresses avec base json des adresses
ask me pour le sujet et texte 

........plein de possibilités ......  
//