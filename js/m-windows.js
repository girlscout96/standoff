console.log('Hello world');
window.addEventListener('load', function() {
  var openModalButtons = document.getElementsByClassName('__modal-button');
  console.log(openModalButtons);
  for(var i = 0; i < openModalButtons.length; ++i) {
    console.log(openModalButtons[i]);
    openModalButtons[i].addEventListener('click', function(e) {
      console.log('click');
      var modalToShowID = this.getAttribute('data-modal-window');
      console.log(modalToShowID);
      if(modalToShowID) {
        var modalWindow = document.getElementById(modalToShowID);
        console.log(modalWindow);
        var action = this.getAttribute('data-modal-action');
        console.log(action);
        if(action === 'show') {
          modalWindow.classList.add('active');
          let childModal = modalWindow.children[0];
          console.log(modalWindow);
          console.log(childModal);
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