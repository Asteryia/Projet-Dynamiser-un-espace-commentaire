document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');

    // Soumission du formulaire
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    
    // Récupération des valeurs de champs et suprression des espaces blancs
      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();
      const message = document.getElementById('message').value.trim();
  
    // Créer un nouveau commentaire
      const newComment = document.createElement('div');
      newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
      newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;

    // Vérification de la longueur du message
      if (message.length > 500) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Le message ne doit pas dépasser 500 caractères.';
      return;
      }
         
    // Vérification des champs
      if (!firstName || !lastName || !message) {
        errorMessage.style.display = 'block'; // Message d'erreur si un champ est vide
      } else {
        errorMessage.style.display = 'none'; // Pas de messages d'erreur si tous les champs sont remplis

    // Ajout du nouveau commentaire à la liste
      commentList.appendChild(newComment);
  
    // Réinitialisation du formulaire
      form.reset();
    }
    });
  });