// ===== 全局状态 =====
let currentCategory = "绘画";
let currentDictCat = "哲学";
let currentAesthetic = "liufa";
let currentCompare = "nanbei";
let currentTechnique = "painting";
let currentMasterCat = "painter";
let currentOpenBook = null;
let graphSimulation = null;
let allBooksCache = {};

// 从ALL_BOOKS自动加载全量446部典籍
function extendBooksData() {
    // 遍历所有书籍，加入对应分类
    ALL_BOOKS.forEach(b => {
        const cat = b.category;
        if (!booksData[cat]) booksData[cat] = [];
        booksData[cat].push({
            title: b.title,
            author: b.author,
            dynasty: b.dynasty,
            file: b.file
        });
    });
}


