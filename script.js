const FAQitem = document.querySelectorAll('.FAQ_item');

FAQitem.forEach(item => {
    item.addEventListener('click', function(event) {
        const self = event.currentTarget;

        const BtnFAQ = self.querySelector('.FAQBtn')
        const PFAQ = self.querySelector('.PFAQ')

        BtnFAQ.addEventListener('click', function() {

            PFAQ.classList.toggle('hide')

        });
    });
});

