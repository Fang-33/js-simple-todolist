const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');

// 添加點擊按鈕的監聽
addBtn.addEventListener('click', () => {
    AddTodoListItem();
})

// 建立 function，插入元素
function AddTodoListItem() {
    // 取得 input 的值並且移除前後空白
    const taskText = taskInput.value.trim();
    const taskItem = `
        <li class="todo-item">
        <span class="item">${taskText}</span>
        <button class="closeBtn">X</button>
        </li>
        `
    // 如果不是空值才插入元素
    if (taskText != "") {
        // 插入元素
        todoList.insertAdjacentHTML('afterbegin', taskItem)
    }
    // 移除輸入框裡的值
    taskInput.value = ""
    // 保持 focus
    taskInput.focus()
}

// 添加鍵盤 enter 的監聽
taskInput.addEventListener('keydown', (evt) => {
    // 如果按的是 enter
    // 因為按輸入紀錄會觸發按鍵監聽為 undefined，所以判斷須處理
    // 鍵盤有兩種 enter 的 code 不同，所以用 includes
    if (evt.code && evt.code.includes('Enter')) {
        // 調用插入元素的 function
        AddTodoListItem();
    }
})

// 新增監聽器，按到 ul 裡面的 button
todoList.addEventListener('click',(evt) => {
    const target = evt.target;
    if (target.nodeName == 'BUTTON') {
        // 移除 parentElement
       target.parentElement.remove() 
    }
})