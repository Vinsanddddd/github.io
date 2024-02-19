// Получаем все элементы с классом "tab"
var tabs = document.getElementsByClassName("tab");

// Получаем все элементы с классом "tab-content"
var tabContents = document.getElementsByClassName("tab-content");

// Перебираем каждую вкладку
for (var i = 0; i < tabs.length; i++) {
    // Добавляем обработчик события клика на каждую вкладку
    tabs[i].addEventListener("click", function() {
        // Скрываем все содержимое вкладок
        for (var j = 0; j < tabContents.length; j++) {
            tabContents[j].style.display = "none";
        }
        // Отображаем только содержимое текущей вкладки
        var tabContentId = this.getAttribute("data-tab-id");
        var tabContent = document.getElementById(tabContentId);
        if (tabContent) {
            tabContent.style.display = "block";
        }
    });
}
