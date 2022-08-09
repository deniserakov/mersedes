const tabsHandlerItems = document.querySelectorAll('[data-tabs-handler]')
const tabsSectionItems = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerItems) {
    btn.addEventListener('click', () => {
        tabsHandlerItems.forEach(item => {
            item.classList.remove('design-list__item_active')
            btn.classList.add('design-list__item_active')
        })

        tabsSectionItems.forEach(cont => {
            if (cont.dataset.tabsField === btn.dataset.tabsHandler) {
                cont.classList.remove('hidden')
            } else {
                cont.classList.add('hidden')
            }
        })
    })
}