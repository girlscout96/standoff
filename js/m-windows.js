window.addEventListener('load', function() {
  var openModalButtons = document.querySelectorAll('.__modal-button');
  for(var i = 0; i < openModalButtons.length; ++i) {
    openModalButtons[i].addEventListener('click', function(e) {
      var modalToShowID = this.getAttribute('data-modal-window');
      if(modalToShowID) {
        var modalWindow = document.querySelector('#' + modalToShowID);
        var action = this.getAttribute('data-modal-action');
        if(action === 'show') {
          modalWindow.classList.add('active');
          let childModal = modalWindow.children[0];
          if(childModal)
            childModal.classList.add('active');
        }
        else if(action === 'hide') {
          if(modalWindow.classList.contains('active')) {
            modalWindow.classList.remove('active');
            let childModal = modalWindow.children[0];
            if(childModal) {
              if(childModal.classList.contains('active'))
                childModal.classList.remove('active');
            }
          }
        }
      }

    });
  }
});
