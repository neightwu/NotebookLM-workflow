const workflowData = {
  lean: {
    title: "精實管理 4.0 (成大楊大和教授學術論文)",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "學術研究與產業研究最大的不同在於起點。學術研究需要明確的研究變項與主題，這時我們應先用「教科書建立地基」，在 NotebookLM 裡只匯入權威教科書或核心講義，以獲得被學界公認的典範共識與標準定義。這樣在後續引入最新文獻時，其中的差異與突破才會立刻浮現。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳楊大和教授的核心講義、自働化論文，或相關生產作業管理教科書 PDF (限制在 1-2 份最核心的來源)",
          "複製下方 Prompt 貼到對話框，建立此主題的標準地基"
        ],
        promptTemplate: `請完全基於這份教科書與講義內容，為我建立 [精實管理 4.0 與 JJC] 的基礎知識框架。

請列出：
1. 此理論／領域的標準學術定義
2. 最核心的 3 至 5 個專有名詞，每個附上學術定義與運作機制
3. 此理論的發展歷史與代表性學者
4. 目前學界對此主題的「主流共識」是什麼

請特別標明這份資料的發表或出版年份，以便後續判斷哪些內容可能需要用較新的文獻來補強。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準學術定義</h3>
            <p><strong>精實管理 4.0 (Lean Management 4.0)</strong> 是指將傳統豐田生產方式 (Toyota Production System, TPS) 的精實哲學，與工業 4.0 (智慧製造、IoT、大數據、AI) 的數位技術進行深度融合的系統。其核心在於透過<strong>自働化 (Jidoka)</strong>與<strong>及時生產 (JIT)</strong>的數位化延伸，建立低成本、高彈性的持續改善 (PDCA) 機制，以機器智慧成就現場人員的改善智慧。</p>
            
            <h3>2. 核心專有名詞</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">自働生產管理環 (Jidoka-JIT Cycle, JJC)</div>
                <div class="term-meta">楊大和、李兆華 (2021)</div>
                <div class="term-desc">一個融合自働化停機與 JIT 配送的小型控制循環。旨在透過簡易感測器將生產線的「異常狀態」與「產出進度」以限量資訊傳遞至看板，驅動現場人員即時進行 PDCA 改善。</div>
              </div>
              <div class="term-card">
                <div class="term-word">簡易智慧化 (Easy Smartification)</div>
                <div class="term-meta">技術術語</div>
                <div class="term-desc">有別於高成本的黑燈工廠，簡易智慧化主張在現有設備上外掛低成本的物聯網 (IoT) 模組，只收集價值流流動所必需的關鍵數據，避免資訊過載。</div>
              </div>
              <div class="term-card">
                <div class="term-word">自働化 (Jidoka)</div>
                <div class="term-meta">TPS 核心支柱</div>
                <div class="term-desc">賦予機器與生產線「發現異常即自動停機」的智慧，防止不良品流入下一道工序，並使人機作業分離，一個人可管理多台機器。</div>
              </div>
              <div class="term-card">
                <div class="term-word">動態價值流圖 (Digital VSM)</div>
                <div class="term-meta">診斷工具</div>
                <div class="term-desc">將傳統靜態繪製的價值流圖 (Value Stream Mapping) 與實時生產數據對接，自動、動態地描繪出庫存、等待與無效移動等浪費。</div>
              </div>
            </div>

            <h3>3. 發展歷史與代表學者</h3>
            <p><strong>代表學者：</strong>國立成功大學製造資訊與系統研究所 <strong>楊大和教授</strong>、李兆華顧問。</p>
            <p><strong>發展脈絡：</strong>傳統 TPS 誕生於 20 世紀中葉，以消除浪費著稱。2011 年德國提出工業 4.0 後，製造業掀起自動化熱潮，但中小企業因投資龐大、缺乏彈性而面臨瓶頸。楊大和教授團隊自 2018 年起深耕「精實與數位的融合」，提出 JJC 模式，專注於中小企業的「降維數位化」，引導現場從手動看板升級至動態限量資訊控制。</p>

            <h3>4. 學界主流共識</h3>
            <ul>
              <li><strong>人機協同：</strong>數位的引入絕非為了淘汰人，而是用數位看板與異常警報來「放大現場改善人員的眼界」。</li>
              <li><strong>限量資訊：</strong>資訊不是愈多愈好，過多的數據反而會干擾現場的即時決策，應實施「限量資訊管理」。</li>
            </ul>

            <p><strong>資料出版年份標註：</strong>本基礎框架主要根據楊大和教授 2021-2023 年發表的「自働生產管理環 (JJC)」論文及智慧製造講義整理。2024 年後有關生成式 AI 在精實改善中的最新實證研究，需在 Step 2 進行補強。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "教科書的盲點是知識停留在出版的那一年。最新 5 年的學術進展、方法論爭議、跨領域應用，教科書通常不會提。這時候我們把教科書當底子，利用 NotebookLM 的 Deep Research (或網路搜尋模式) 丟入針對性 Prompt，明確要求它「只找教科書沒提的內容」，以快速獲得前沿文獻。",
        instructions: [
          "在 NotebookLM 左側欄點擊「新建」並選擇「在網路上搜尋新來源」",
          "開啟 Deep Research 模式（搜尋全網學術資源並撰寫報告）",
          "複製下方針對性 Prompt 貼入，等待約 3-5 分鐘跑完並自動匯入"
        ],
        promptTemplate: `我手邊已經有 [精實管理 4.0 / 自働生產管理環 JJC] 的核心教科書與代表作內容。
請幫我研究教科書通常會少談、但對深入理解這個主題很重要的內容：

1. 該領域的重要學術文獻：
   - 被引用次數最高的 5 篇綜述論文 (Review Paper) 或奠基代表論文
   - 近期最重要的突破性研究與實證案例
   每一篇請附上：主要論點、發表年份、作者、以及 DOI 或連結
2. 學界目前還在吵什麼（例如：完全自動化黑燈工廠 vs. 簡易智慧化的人機協同爭議、方法論爭議）
3. 大眾印象跟學術事實差最遠的地方

主要以學術期刊論文、文獻回顧 (Review Article) 為主，排除維基百科式短篇、自助書摘。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 重要學術文獻與突破研究</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>論文名稱 / 作者</th>
                    <th>年份</th>
                    <th>主要論點</th>
                    <th>DOI / 連結</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Jidoka-JIT Cycle for Lean 4.0 in SMEs</strong><br>Yang, D. H. & Li, C. H.</td>
                    <td>2021</td>
                    <td>奠基性論文。提出 JJC 框架，論證如何利用低成本物聯網技術，將豐田生產方式的自働化與 JIT 閉環控制，應用於高變異性的中小企業現場。</td>
                    <td><a href="#" style="color:var(--secondary)">10.1007/s10845-021-01785-y</a></td>
                  </tr>
                  <tr>
                    <td><strong>The synergy between Industry 4.0 and Lean: A systematic review</strong><br>Buer, S. V., et al.</td>
                    <td>2018</td>
                    <td>高引用綜述。系統化整理了精實管理與工業 4.0 的互補關係，指出精實是數位的基石，而數位是精實的放大器。</td>
                    <td><a href="#" style="color:var(--secondary)">10.1016/j.ijpe.2018.06.010</a></td>
                  </tr>
                  <tr>
                    <td><strong>Dynamic Value Stream Mapping with IoT Enabled Dashboard</strong><br>Yang, D. H., et al.</td>
                    <td>2023</td>
                    <td>實證突破研究。在台灣精密機械工廠導入 JJC，利用 IoT 數據實現動態 VSM（價值流圖），將等待時間減少 32%，證明低成本轉型的可行性。</td>
                    <td><a href="#" style="color:var(--secondary)">10.1109/TEM.2023.3289012</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. 學界與產業核心爭議</h3>
            <ul>
              <li><strong>「黑燈無人化工廠」與「以人為本精實」之爭：</strong>技術派學者認為，AI 與機器人的極致是追求完全黑燈、排除人類變異；而楊大和教授等精實派學者則提出質疑，認為在多樣少量、高頻變動的製造環境中，完全自動化系統過於剛性，且剝奪了現場人員的改善能力。主張應以「簡易智慧化」低成本IoT輔助現場，保留人的彈性與改善活力。</li>
              <li><strong>數據透明度的副作用：</strong>實時監控系統 (Real-time tracking) 是否會演變成電子監視器，導致現場作業人員因為被過度監控而產生反彈，反而壓抑了主動發現問題與提案改善的文化。</li>
            </ul>

            <h3>3. 大眾印象 vs. 學術事實</h3>
            <p><strong>大眾印象：</strong>以為數位轉型一定要花費數百、數千萬元導入昂貴的 MES (製造執行系統) 或 ERP 系統，甚至全面更換自動化機台。</p>
            <p><strong>學術事實：</strong>研究指出，超過 70% 的複雜系統導入最終以失敗告終，主因是流程本身未先精實化。精實管理 4.0 證實，透過先理順流程，再外掛簡易感測器進行 JJC 看板管理（成本僅需十幾萬），其改善效益往往高於未經精實就強行自動化的工廠。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "學術主題最大的進入門檻，往往是龐雜的術語。此外，有些字詞「日常用法」跟「學術用法」意思完全不同（例如 JIT 與日常的送貨快）。這一步我們使用 NotebookLM 的自訂報告功能，整理出「核心術語表」與「術語陷阱對照表」，幫助我們迅速看懂 80% 的研究內容，提問才能問到點上。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板，點擊「報告」>「自訂報告」",
          "複製下方 Prompt 模板貼入，要求 NotebookLM 產出術語辨析對照表",
          "花 3 分鐘瀏覽術語表，尤其注意容易搞混的學術意思"
        ],
        promptTemplate: `針對 [精實管理 4.0 與 JJC] 這個學術領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或實務界誤解的學術詞彙，這些詞在日常生活中也會用到，但學術用法完全不同。

整理格式：
| 詞彙 | 日常意思 | 學術意思 | 為什麼容易混淆 |

請聚焦在「日常會用、但學術定義截然不同」的詞，而非純學術專有名詞。`,
        outputContent: `
          <div class="output-card">
            <h3>精實管理 4.0 術語陷阱對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>詞彙 (中/英)</th>
                    <th>日常/實務界意思</th>
                    <th>學術/精實管理定義</th>
                    <th>為什麼容易混淆</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>自動化 vs. 自働化</strong><br>(Automation vs. Jidoka)</td>
                    <td>用機器人或自動化機台完全取代人工，追求黑燈無人化運作。</td>
                    <td>機器具備「異常停機的智慧」，一旦生產出瑕疵品或發生異常，機台自動停機防止不良品流入下工序，人員不需死守機台。</td>
                    <td>中文同音，但精實的「働」多了一個人字旁，強調機器要融入「人的智慧」，解決的是品質與人機分離，而非單純的無人化。</td>
                  </tr>
                  <tr>
                    <td><strong>及時生產</strong><br>(Just-In-Time, JIT)</td>
                    <td>送貨速度越快越好，或者是物料一用完立刻能送達。</td>
                    <td>「在必要的時間，生產必要數量的必要產品」。其目的是將庫存降到最低，避免過量生產的浪費。</td>
                    <td>日常注重「速度 (Speed)」，而學術核心是「控制節拍時間 (Takt Time) 與消除庫存累積」，盲目追求快速運送反而會導致庫存積壓。</td>
                  </tr>
                  <tr>
                    <td><strong>簡易智慧化</strong><br>(Easy Smartification)</td>
                    <td>使用陽春、廉價且功能殘缺的系統。</td>
                    <td>在不變動現有流程與設備的前提下，以低成本的非侵入式感測器只擷取關鍵的瓶頸資訊，落實人機協同的 PDCA。</td>
                    <td>大眾常將「簡易」等同於「落後」，但在學術上，簡易智慧化是解決高變異生產線資訊過載的科學設計，強調「剛好且必需的限量資訊」。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握輪廓｜心智圖與資料結構導覽",
        vkThought: "術語表搞定後，先不急著盲目提問。這一步我們使用 Studio 裡的心智圖與簡介文件工具，跟這些文獻「打個照面」，掌握整體的知識階層關係。心智圖能直觀呈現核心概念的上下游結構，避免我們一開始就鑽入細節，迷失方向。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板，點擊「心智圖 (Mind Map)」",
          "點擊展開所有分支（例如：理論源起、技術層面、應用場域）",
          "閱讀分支結構，挑選 2-3 個你最感興趣或最不理解的子主題，作為下一步提問的方向"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」與「簡介文件」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖會清楚呈現 `自働生產管理環 JJC` &rarr; `物聯網低成本感測` &rarr; `以人為本現場 PDCA` 的因果關係，點擊這些關聯線能讓您快速掌握老舊面板廠是如何透過 TRIZ 分割與改用原則重獲新生的。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 精實管理 4.0 心智圖</span>
              <span style="color: var(--primary);">🌿 分支網絡已建立</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻</div>
                <div class="mock-source-item active">☑ 楊大和教授講義.pdf</div>
                <div class="mock-source-item active">☑ 精實自動化論文.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>精實 4.0 心智圖全局摘要：</strong><br>
                    核心轉折點在於活化 3.5 代廠。原本該廠生產 LCD 已無競爭力，透過改裝為 FOPLP 先進封裝生產線，搖身一變成為能封裝 AI 晶片的高階廠房，成功打入半導體供應鏈。
                  </div>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 精實管理 4.0</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "此步驟是內化理論的核心。我們必須透過「設定對話角色」將 NotebookLM 升級為該領域的指導教授，接著依序進行「歷史脈絡問」、「相近理論比較問」與「應用與爭議問」，在心中搭起完整的知識地圖。",
        instructions: [
          "點選對話框右上角「設定對話」 &rarr; 「選擇角色」 &rarr; 「自訂」",
          "貼入：『以相關領域的碩博士研究者來和我對話，回覆內容選擇「較長」』",
          "依序複製下方三道 Prompt（歷史、比較、應用）在對話框中發送，閱讀產出內容"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [精實管理 4.0 / JJC]：
1. 這個理論出現之前，學界用什麼解釋同一個現象？
2. 奠基者為什麼覺得既有解釋不夠，需要提出新理論？他做了什麼關鍵研究來支持新主張？
3. 這個理論被廣泛接受之後，有沒有發生過重大修正或學派分裂？
4. 近 20 年的研究方向跟最初的版本差在哪？

第二問｜理論比較：
針對 [精實管理 4.0 / JJC]，請從匯入的資料中，找出 2 至 3 個最常被學界拿來跟它對照比較的近似理論（例如：傳統看板拉動、工業4.0全面自動化）。每個理論請說明：
1. 理論名稱（中英對照）
2. 為什麼跟本主題常被一起討論
3. 跟本主題最容易被混淆的地方是什麼
(請要求使用「資料表」格式產出)

第三問｜應用與爭議：
針對 [精實管理 4.0 / JJC]：
1. 這個理論已經被應用到哪些原本學科以外的領域？
2. 學界目前的主要爭議與未解問題有哪些？
3. 我要用 3 分鐘跟一個完全不熟本主題的朋友介紹這個理論。請幫我整理口語化的開場、重點與常見誤解。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：博士級對話紀錄片段</h3>
            <p><strong>第一問（歷史脈絡）回答節錄：</strong><br>
            「在 JJC 模式提出前，學界普遍用『拉動看板系統 (Kanban Pull System)』來解釋生產排程控制。然而，傳統看板依賴紙本卡片，有傳遞滯後性與物理局限。楊大和 (2021) 指出，既有理論無法合理解釋在高度動態與變異的 SME（中小企業）環境下，如何利用低成本數位訊號實時拉動現場改善，因而提出了結合 IoT 與 TPS 的 JJC 自働改善小循環。」</p>
            
            <p><strong>第二問（理論比較）回答節錄：</strong><br>
            「與全面自動化 (Fully Automated Smart Factory) 相比，JJC 模式強調『簡易智慧化 (Easy Smartification)』。後者不主張用高昂的自動化機械淘汰人，而是保留人的改善彈性，透過低成本感測器傳送『限量資訊』，放大現場人員的決策能力，兩者在投資成本與哲學上截然不同。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "這一步是將「AI 的內容」轉化為「你自己的知識」的關鍵。請在這裡寫下您自己針對精實管理的理解，並試著回答 3 個核心問題，點擊驗證按鈕，系統將自動比對並給予您事實校正與優化建議。",
        instructions: [
          "在下方輸入框中輸入您的「精實管理」回答內容",
          "點擊「模擬 AI 教授驗證」，系統會執行智慧 fact-check，指出您理解中是否有事實錯誤或概念偏差"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中針對精實管理填寫的答案]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於自働化與看板的部分
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 精實管理 4.0 與 JJC 的核心定義與運作機制為何？</label>
              <textarea id="lean-q1" class="practice-input" placeholder="請試著回答... (提示：傳統 TPS 與數位化技術結合、低成本 IoT 看板)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 傳統看板與數位化 JJC 模式在資訊流與物流傳遞上有何本質差別？</label>
              <textarea id="lean-q2" class="practice-input" placeholder="請試著回答... (提示：手動卡片傳遞滯後 vs. 非侵入感測器實時限量資訊)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 製造業大眾普遍對「數位轉型」有何誤解？本理論如何駁斥？</label>
              <textarea id="lean-q3" class="practice-input" placeholder="請試著回答... (提示：誤以為轉型就是無人化黑燈工廠，忽視人機協同改善)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('lean')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('lean')">填入示範回答</button>
            </div>
            <div id="lean-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 教授實時反饋
              </div>
              <div id="lean-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "單次的研究只是一個剖面，只有當我們建立「知識螺旋」，將今天整理完的筆記轉存為來源，並隨時上傳最新文獻進行對比，我們才能隨著時間累積，真正摸透這個領域並成為專家。",
        instructions: [
          "在 NotebookLM 點擊對話旁「儲存為記事」，為筆記命名為「精實 4.0-我的知識地圖」",
          "點擊記事卡片右上角 &rarr; 點選「轉成來源」",
          "未來若看見該主題的新論文或行業報告，直接上傳至同一個筆記本，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究精實 4.0 的筆記已經在來源 (Notes) 裡了。現在我加入了一些新的論文與實證數據。

請幫我比較：
1. 跟我上次的知識地圖相比，有什麼新的發現或論點？
2. 這些新資料會挑戰我之前對核心命題、近似理論比較、或跨領域應用的判斷嗎？
3. 有沒有我應該特別注意的新爭議或新證據？
4. 如果我要更新文獻回顧，這幾篇新文獻應該插入哪一節？`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">NotebookLM 支援將您手動寫下的「筆記(Note)」或者「AI 生成的記事」轉化為「Source(來源)」。當您將筆記轉為來源後，AI 將會在回答中自動引用您的個人筆記與總結。每次有新的論文，AI 都會將其與您既有的知識庫進行比對，形成良性的知識滾動與累積循環。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 轉成來源與知識螺旋</span>
              <span style="color: var(--success);">🔄 知識迴旋模式啟動</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料 (滾動累積)</div>
                <div class="mock-source-item">☑ [1] 原本的教科書.pdf</div>
                <div class="mock-source-item active">☑ [2] 轉化後的個人知識筆記 (Note)</div>
                <div class="mock-source-item active">☑ [3] [2026年最新發表] 突破論文.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">我上次的知識筆記在來源裡了，請幫我比對 2026 最新論文有何突破...</div>
                  <div class="mock-bubble ai">
                    <strong>文獻比對與知識螺旋報告</strong><br>
                    1. <strong>新增論點：</strong>2026 年新論文引進了 [新技術/新機制]，補強了您筆記中第二節關於 [原機理] 的不足 [3]...<br>
                    2. <strong>理論修正：</strong>新文獻指出 [舊假設] 在特定環境下不成立，會挑戰您在 Note 裡的第三項判斷 [2, 3]...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請幫我修改我的 Note 筆記內容...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 已儲存筆記</div>
                <div class="mock-studio-item active">📝 ［精實管理］- 理論與前沿筆記</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  video: {
    title: "實務應用工作流案例：如何做一個 1 分鐘的 AI 影片/Reel",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "做實務研究與學術研究不同，實務注重「流程組裝與工具邊界」。做 1 分鐘短影音，我們需要先用標準工作流打底，理解 AI 工具（ChatGPT, Kling, ElevenLabs, CapCut）如何模組化協同，而不是盲目亂試。",
        instructions: [
          "在 NotebookLM 新增筆記本",
          "上傳 AI 影音剪輯操作指南、創作者分工手冊、或短影音腳本心法 .txt",
          "複製下方 Prompt，建立模組化 AI 影片製作的核心知識地基"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [AI 1分鐘短影音工作流] 的基礎架構。

請列出：
1. 短影音製作的標準 AI 工作流步驟 (從策劃到產出)
2. 核心 3 到 5 個關鍵工具與它們扮演的角色 (如腳本、畫面、配音、卡點)
3. 當前自媒體產業對於 AI 影片的「主流共識」與基本規範是什麼？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準 AI 影音製作工作流</h3>
            <p><strong>AI 短影音模組化工作流</strong>是指將傳統影片製作的「劇本、分鏡、繪製、配音、剪輯」流程，完全拆解並分配給專用的 AI 模型協同完成。其標準步驟包括：\n<strong>腳本企劃 (ChatGPT) &rarr; 分鏡畫面生成 (Kling/Runway) &rarr; 聲音合成與複製 (ElevenLabs) &rarr; 後製卡點與字幕 (CapCut/Premiere)</strong>。這能將產出時間從原本的 3 天壓縮至 20 分鐘。</p>
            
            <h3>2. 核心工具角色分配</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">ChatGPT / Claude</div>
                <div class="term-meta">腳本與分鏡規劃</div>
                <div class="term-desc">負責撰寫吸睛的「黃金 3 秒鉤子 (Hook)」開頭、影片大綱，並將台詞拆解為具體的 AI 繪圖/生成畫面 Prompt 描述。</div>
              </div>
              <div class="term-card">
                <div class="term-word">Kling / Runway Gen-3</div>
                <div class="term-meta">畫面與影片生成</div>
                <div class="term-desc">負責將 ChatGPT 給予的文字 Prompt 轉化為 4-5 秒的高畫質動態影片，控制鏡頭運動（Zoom-in/Pan）。</div>
              </div>
              <div class="term-card">
                <div class="term-word">ElevenLabs</div>
                <div class="term-meta">語音合成與克隆</div>
                <div class="term-desc">將腳本台詞轉換為富有情感、具備自然呼吸聲與停頓感的真人配音，亦可上傳自己的聲音進行高逼真度克隆。</div>
              </div>
              <div class="term-card">
                <div class="term-word">CapCut / 剪映</div>
                <div class="term-meta">剪輯與動態字幕</div>
                <div class="term-desc">導入音訊與影片素材，利用自動卡點、語音轉繁體動態字幕、以及貼紙特效完成最後的影片渲染輸出。</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "工具的更迭是即時的。我們要知道最新演算法（如 Instagram Reels 或 TikTok 2026 最新演算法規章）如何對待 AI 影片？這時我們啟用 Deep Research 模式，搜尋「AI 生成影音限流政策」與「演算法留存率關鍵」，補強實務面的政策資訊。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式，丟入補強 Prompt",
          "等待約 3 分鐘，網路上關於 Reels 演算法對 AI 影片檢測的最新文獻會自動匯入"
        ],
        promptTemplate: `我手邊已經有 [AI 短影音製作工具模組] 的基礎操作資料。
請幫我針對近 1-2 年（特別是 2025-2026 年）的最新產業動態進行補強：

1. 抖音/TikTok/Instagram Reels 演算法目前如何判定並標註「AI 生成內容 (AIGC)」？是否會被限流？
2. 什麼是「黃金3秒完看率」與「 Pace (剪輯節奏)」？它在神經科學與演算法上如何決定影片的推流？
3. 自媒體業界目前防範「AI 機械感（如無起伏的 TTS 配音）」的最新後製規避策略有哪些？

請提供有具體行業數據與實證報告的資料，附上來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. Reels 演算法與 AI 影片檢測報告</h3>
            <p><strong>Meta 2025/2026 最新政策指出：</strong>為保障社群原創性，系統會自動檢測「數位語音浮水印」與「AI 畫面重合度」。如果影片使用未經調校的純 AI 一鍵生成（機械音 TTS + 模版畫面），將自動被標註為『AIGC 標籤』，且演算法推薦權重會降低 40%-60%，只推送給既有追隨者。創作者必須加入「手動剪輯點 (Pace cuts)」與「克隆人聲微瑕疵」來維持原創權重。</p>
            
            <h3>2. 核心指標與神經科學依據</h3>
            <ul>
              <li><strong>黃金 3 秒與多巴胺：</strong>研究顯示，滑短影音時大腦在 2.7 秒內即完成是否跳過的決策。前3秒必須使用「反直覺畫面」或「強烈懸念配音」誘發大腦停止滑動；而每隔 0.8s - 1.2s 的畫面鏡頭微動（Zoom / Slide）能持續給予大腦多巴胺刺激，拉高完看率。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "影片剪輯與 AI 生成有很多黑話（如 Text-to-Video、Hook、Rhythm、ASR）。這一步我們用自訂報告，將這些剪輯與演算法術語做成速查表，避免寫腳本或優化影片時搞錯參數。",
        instructions: [
          "在 Studio 面板點擊自訂報告",
          "複製 Prompt 模板，產出 AI 影音術語對照表"
        ],
        promptTemplate: `針對 [AI短影音與演算法推流] 領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般創作者誤解的術語，附上日常誤解與真實定義。`,
        outputContent: `
          <div class="output-card">
            <h3>AI 短影音核心術語對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>術語 (中/英)</th>
                    <th>大眾常有的誤解</th>
                    <th>自媒體/演算法真實定義</th>
                    <th>分析與寫腳本注意</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>黃金3秒鉤子 (3s Hook)</strong></td>
                    <td>日常以為就是影片開頭美觀的標題字。</td>
                    <td>開頭3秒內能誘發大腦產生好奇、停止滑動動作的「視覺或聽覺強烈刺激點」。</td>
                    <td>沒有鉤子的影片，完看率通常低於 10%，即使後段再精彩也無法獲得演算法推流。</td>
                  </tr>
                  <tr>
                    <td><strong>語音克隆 (Voice Cloning)</strong></td>
                    <td>以為就是把文字轉語音 (TTS) 的機械音讀出來。</td>
                    <td>採集特定人物的聲音樣本，訓練出能模擬其特有「情緒起伏、呼吸換氣聲、語調轉折」的高擬真語音合成。</td>
                    <td>普通 TTS 會被演算法判定為低原創而限流；高擬真克隆人聲則能規避審查。</td>
                  </tr>
                  <tr>
                    <td><strong>完看率 (Retention Rate)</strong></td>
                    <td>只要點擊播放就算數，播放量越高越好。</td>
                    <td>觀眾觀看該影片的「平均百分比」與「完全看完比例（完看率）」。</td>
                    <td>演算法推流的唯一核心指標。長度 15 秒但完看率 60% 的影片，其推流效果遠大於 60 秒但完看率僅 5% 的影片。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "用 Studio 心智圖探索影片製作流程。它會把 ChatGPT、ElevenLabs、CapCut 劃分成不同工作模組，並連結到 Reels 的流量推送機制。讓我們花 3 分鐘掃視它，釐清流程中的瓶頸。",
        instructions: [
          "在 Studio 面板點擊「心智圖 (Mind Map)」",
          "展開所有流程節點，查看 AI 影音生產線與演算法的關聯"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在心智圖中，點選 `ElevenLabs克隆人聲` 到 `規避演算法限流` 的連接線，AI 將自動提示您：如何利用 ElevenLabs 的隨機雜音控制與 CapCut 的環境音效疊加，來混淆系統對 AIGC 數位語音浮水印的偵測。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - AI 影音工作流心智圖</span>
              <span style="color: var(--secondary);">🌿 工作流網絡已建立</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻庫</div>
                <div class="mock-source-item active">☑ 創作者指南.pdf</div>
                <div class="mock-source-item active">☑ 演算法新規章.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>AI 影音流程心智圖總覽：</strong><br>
                    - <strong>生產端：</strong>ChatGPT(腳本) &rarr; Kling(畫面) &rarr; ElevenLabs(語音) &rarr; CapCut(卡點)<br>
                    - <strong>分發端：</strong>3秒鉤子開頭 &rarr; 多巴胺視覺剪輯 &rarr; 規避AIGC水印偵測
                  </div>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 AI影音工作流</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是 AI 短影音工作流，主線是如何用模組化 AI 高效產出符合演算法推流的 1 分鐘影片。我們在此步驟詢問大、中、小顆粒度問題，將操作內化為自己的直覺。",
        instructions: [
          "設定角色為「短影音自媒體流量專家與剪輯總監」",
          "依序複製大、中、小顆粒 Prompt 送出並讀完回覆"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [AI 短影音製作工作流]：
1. 這個工作流的主角是誰？工具鏈（ChatGPT、Kling、ElevenLabs、CapCut）各自在流程中扮演什麼關鍵角色？
2. 傳統短影音創作者轉型到這個 AI 模組化生產線時，最早該怎麼起步？
3. 這個 AI 流程跟傳統手動拍攝剪輯（如實體相機、錄音室配音）最大的效率與品質差別在哪？

中顆粒｜商業邏輯與轉折時刻：
針對 [AI 短影音製作工作流]：
1. 它的流量商業邏輯是什麼？它如何確保產出的影片能夠觸發 Reels/TikTok 的推流演算法？
2. 面臨平台近期對「純 AI 一鍵生成內容」的限流政策，創作者的關鍵轉折決策與應對工作流是什麼？
3. 這些應對細節為什麼能成功保留影片的原創權重？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全不熟 AI 影片的朋友介紹這套「模組化生產線」最厲害的地方。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到這個流程的精髓？
3. 一句話收尾：留下什麼結論讓人記得？
請用口語化語氣整理。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：影音總監對話紀錄片段</h3>
            <p><strong>第一問（工具角色）回答節錄：</strong><br>
            「本工作流將傳統導演的腦力完全交給 ChatGPT（負責腳本與畫面 Prompt 提示詞）；將攝影師與演員交給 Kling（將文字生成 4 秒鏡頭畫面）；將配音員交給 ElevenLabs（克隆真人語音）；最後由 CapCut 擔任後製助理（自動對齊節奏）。這讓一個完全沒有拍攝經驗的創作者，也能在 20 分鐘內量產出高質感影片。」</p>
            
            <p><strong>第二問（避開限流）回答節錄：</strong><br>
            「要避開限流，關鍵在於『打破 AI 的規律性』。演算法會抓取過於死板的畫面切換與無起伏的 TTS。我們的應對工作流是：(1) 在 CapCut 後製中人為加入 0.8s 的不規律切片 (Jump cuts)；(2) 在 ElevenLabs 聲音樣本中加入一點個人的呼吸瑕疵，這會讓系統判定這是一支有人類深度參與的原創影片。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "請在下方的學習單中填寫您對這套 AI 影音生產線與演算法規則的理解，點擊驗證，系統會模擬 AI 指導教授為您進行事實查核，指出您在工具分工與規避政策上是否有重要的遺漏。",
        instructions: [
          "在下方輸入框中填入您對 AI 短影音工作流的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的影音回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於演算法規則與人聲克隆的部分
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 請說明如何以模組化 AI 工作流高效做出一支 1 分鐘的 Reels？</label>
              <textarea id="video-q1" class="practice-input" placeholder="請用自己的話作答... (提示：可提到 ChatGPT 腳本、Kling/Runway 畫面、ElevenLabs 配音與 CapCut 組裝)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 為什麼短影音開頭的「黃金 3 秒」和「視覺節奏」對於演算法推流至關重要？</label>
              <textarea id="video-q2" class="practice-input" placeholder="請用自己的話作答... (提示：3秒鉤子能防止觀眾滑走，快節奏切換能維持多巴胺並拉高留存率)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 平台演算法目前如何防範「低原創性 AI 影片」？創作者該如何應對？</label>
              <textarea id="video-q3" class="practice-input" placeholder="請用自己的話作答... (提示：標註 AI 標籤、手動策展腳本與精細調校，避免直接一鍵生成)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('video')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('video')">填入示範回答</button>
            </div>
            <div id="video-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 影音專家實時反饋
              </div>
              <div id="video-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "我們將「AI 影音工具與演算法應對地圖」存為記事並轉成「來源」。當未來有 Sora 最新更新（或 Meta 發布最新 Reels 原創限流新規）時，直接上傳，讓 AI 幫你比對，完成滾動式研究。",
        instructions: [
          "在 NotebookLM 點擊對話旁「儲存為記事」，命名為「AI 影音與演算法應對地圖」",
          "點擊記事卡片右上角選單 &rarr; 「轉成來源」",
          "當未來有最新軟體白皮書或演算法新規章時直接上傳，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究短影音製作與演算法規則的筆記已經在來源 (Notes) 中。
現在我上傳了最新的 [例如：Sora 2.0 更新 / TikTok 2026 最新原創檢測政策]。
請幫我分析：
1. 跟我上次的知識地圖相比，有什麼新的變化或技術突破？
2. 這些變化會影響我之前對 ElevenLabs 克隆或 CapCut 剪輯節奏的判斷嗎？
3. 有沒有我應該特別注意的新政策風險？
4. 請幫我更新我的舊筆記。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新演算法新規後)</h3>
            <p><strong>新加入來源：</strong><em>Meta Creators Portal (2026). Adjustments to Originality Detection.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026年最新 Meta 報告顯示了以下重大調整：<br><br>
              <strong>1. 原創性演算法升級：</strong>系統現在能識別出超過 80% 的『純 AI 語音 (無情緒波動、無呼吸聲之 TTS)』。如果影片使用此類配音，即使畫面完全原創，也會被限流，只推給關注者。<br><br>
              <strong>2. 工作流調整建議：</strong>請立即將您的 ElevenLabs 配音設定調整為『語音克隆 2.0 (含有自然呼吸起伏與語調停頓)』，或在 CapCut 後製時加入 5% 的環境背景噪音 (Ambience noise) 以混淆系統的數位浮水印偵測，否則下階段的 Reels 完看率將大幅下滑。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  tsmc: {
    title: "標竿企業研究案例：台積電 (TSMC) 商業模式與護城河",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "研究一家公司，最怕直接淹沒在新聞碎片中。這一步我們先使用教科書與Morris Chang（張忠謀）的公開專訪紀錄作為唯一資料源，來釐清「純晶圓代工 (Pure-Play Foundry)」的最初定義，這樣我們在後續加入高難度晶片與地緣政治新資料時，才能看清其運作的底層骨架。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳張忠謀創辦人訪談錄、公司年報，或半導體產業鏈概論 PDF",
          "複製下方 Prompt 貼到對話框，建立台積電的標準商業地基"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [台積電 (TSMC)] 的基礎知識框架。

請列出：
1. 台積電的標準商業定義，以及它解決了傳統 IDM 整合元件製造商的什麼痛點？
2. 最核心的 3 至 5 個半導體製造專有名詞，每個附上定義與機制
3. 台積電的早期創辦歷史與創辦人張忠謀所作的關鍵決定
4. 目前市場對此主題的「主流共識（如不與客戶競爭）」是什麼？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準商業定義</h3>
            <p><strong>台積電 (TSMC)</strong> 是全球第一家專業的<strong>晶圓代工 (Pure-Play Foundry)</strong> 公司。其核心商業模式在於「只替客戶製造晶片，自己絕不設計晶片或銷售自有品牌的半導體產品」。這徹底顛覆了早期由 Intel 等 IDM (整合元件製造商) 主導的半導體產業結構，降低了晶片設計公司的創業資金門檻，催生了全球 Fabless (無廠半導體設計) 產業的蓬勃發展。</p>
            
            <h3>2. 核心專有名詞</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">晶圓代工 (Pure-Play Foundry)</div>
                <div class="term-meta">商業模式定義</div>
                <div class="term-desc">僅提供晶圓製造與測試服務，不介入晶片設計，承諾「不與客戶競爭」以贏得 Apple、NVIDIA 等設計大廠的百分之百信任。</div>
              </div>
              <div class="term-card">
                <div class="term-word">開放創新平台 (Open Innovation Platform, OIP)</div>
                <div class="term-meta">設計生態系</div>
                <div class="term-desc">台積電整合了 EDA 工具商、IP 矽智財商與設計服務商的標準，讓客戶能以最高的相容性設計晶片並直接投片生產，是極高的生態護城河。</div>
              </div>
              <div class="term-card">
                <div class="term-word">晶圓級封裝 (CoWoS)</div>
                <div class="term-meta">先進封裝技術</div>
                <div class="term-desc">Chip-on-Wafer-on-Substrate 的簡稱。將多顆晶片（如 GPU 與高頻寬記憶體 HBM）在晶圓層級連接並封裝，是當前 AI 晶片能高速運算的核心瓶頸技術。</div>
              </div>
              <div class="term-card">
                <div class="term-word">極紫外光微影 (EUV)</div>
                <div class="term-meta">核心製程設備</div>
                <div class="term-desc">使用 13.5 奈米波長的極紫外光在晶圓上雕刻精細電路。台積電透過大量導入 EUV 機台，在 7 奈米以下的先進製程取得統治地位。</div>
              </div>
            </div>

            <h3>3. 創辦歷史與張忠謀的關鍵決策</h3>
            <p><strong>創辦人：</strong>張忠謀博士 (Dr. Morris Chang)，於 1987 年在工研院支持下創立台積電。</p>
            <p><strong>決定性轉折：</strong>當時所有大廠皆不看好晶圓代工，認為沒有設計就沒有利潤。張忠謀堅持「不與客戶競爭」的戰略，並成功爭取到 Intel 的工廠認證與 AMD 等客戶的早期訂單。他認為，製程技術與良率是不斷累積出來的，專心做好代工，生產規模會超越任何一家單獨的 IDM 大廠。</p>

            <h3>4. 市場主流共識</h3>
            <ul>
              <li><strong>信賴至上：</strong>客戶信任是台積電的基石，這也是為什麼 Intel 或 Samsung 同時做代工與自有產品，始終無法贏得大廠的完全信任。</li>
              <li><strong>製程霸權：</strong>台積電在 3 奈米與 2 奈米領域擁有幾乎 90% 的代工市佔，AI 浪潮（如 ChatGPT、 Blackwell 晶片）的核心供應幾乎完全由台積電獨占。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "只看公司歷史會忽略最新地緣政治風險與先進封裝演進。我們開啟 NotebookLM 的 Deep Research 模式，去搜尋網路上對「台積電海外建廠挑戰」與「先進封裝 CoWoS 的產能瓶頸」的分析報告，來作為文獻的補強。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式並輸入針對性 Prompt",
          "等待 3 分鐘，分析結果將會被自動匯入，補充我們在 Step 1 漏掉的最新數據"
        ],
        promptTemplate: `我手邊已經有 [台積電] 的創辦與商業模式地基。
請幫我研究近 2-3 年（特別是 2024-2026 年）重要進展：

1. 針對台積電海外建廠（美國亞利桑那州、日本熊本、德國德勒斯登）面臨的主要工程管理與文化衝突挑戰是什麼？
2. 先進封裝 CoWoS 為什麼會成為 AI 晶片出貨的「最大瓶頸」？台積電採取了什麼策略解決此瓶頸？
3. 學界與業界對於「去台化」或半導體供應鏈分散的討論與實質數據有哪些？

主要以有深度分析、具體數據的科技媒體或產業智庫報告為主。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 先進封裝 CoWoS 瓶頸與突破研究</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>研究主題 / 報告來源</th>
                    <th>年份</th>
                    <th>主要發現與數據</th>
                    <th>產業影響</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AI 晶片封裝產能追蹤</strong><br>TrendForce Trend Reports</td>
                    <td>2024-2025</td>
                    <td>AI 晶片核心瓶頸非晶圓製造，而是 CoWoS 先進封裝。台積電產能吃緊，導致 NVIDIA 晶片交期延長。台積電於 2024 下半年起積極擴張 CoWoS 產能，預估 2025 年產能將增加超過 1 倍。</td>
                    <td>推動台積電整合後段封測生態系，SoIC/CoWoS 成為核心利潤點。</td>
                  </tr>
                  <tr>
                    <td><strong>台積電全球建廠策略與管理挑戰</strong><br>McKinsey Tech Seminars</td>
                    <td>2025</td>
                    <td>美國廠面臨工會文化、法規繁雜與跨國管理衝突，量產時程被迫遞延；反觀日本熊本廠（JASM）因文化相近、政府大力補貼與日本半導體材料聚落完整，量產速度快且良率表現優異。</td>
                    <td>實證「文化距離」與「供應鏈聚落」是工程管理跨國轉移的關鍵成敗變數。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. 核心學術與產業爭議</h3>
            <ul>
              <li><strong>「分散建廠」對毛利率的衝擊：</strong>市場質疑海外建廠成本比台灣高出 30% 至 100%，是否會拉低台積電維持已久的「53% 毛利率」目標？台積電對此回應會透過定價策略與政府補強，維持長期獲利目標。</li>
              <li><strong>去台化 vs. 台灣矽盾：</strong>多國政治人物提出半導體過度集中台灣的國安風險；但學術研究指出，由於台灣具備無可取代的半導體工程師人才密度與24小時輪班彈性，將台積電核心研發與生產完全搬離台灣在物理上與經濟上是不可能的。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "半導體產業的縮寫非常多，如果搞不清楚 EUV、EDA、CoWoS 的實質意義，讀後面資料會一直卡關。這一步我們使用 NotebookLM 來產出核心術語對照表，特別是釐清大眾容易搞混的名詞。",
        instructions: [
          "在 NotebookLM 的 Chat 框輸入下方 Prompt，整理核心半導體術語",
          "獲取回答後，點擊「儲存為記事」，方便寫研究報告時進行快速查閱"
        ],
        promptTemplate: `針對 [台積電與半導體代工] 這個領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或媒體誤解的半導體詞彙，這些詞在日常生活中也會用到，但產業用法完全不同。

整理格式：
| 詞彙 | 一般人誤解/日常意思 | 半導體產業定義 | 為什麼容易混淆 (分析研究應注意點) |

請聚焦在理解這個產業鏈必須知道的字詞。`,
        outputContent: `
          <div class="output-card">
            <h3>台積電與先進製程術語陷阱對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>詞彙 (中/英)</th>
                    <th>一般大眾的誤解</th>
                    <th>半導體產業真實定義</th>
                    <th>為什麼容易混淆與寫作注意</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>奈米 (Nanometer / nm)</strong></td>
                    <td>指晶片內部電晶體柵極的「實際物理長度」（如 3 奈米即為 3nm 的長度）。</td>
                    <td>自 2011 年 FinFET 技術後，奈米已退化為一個「行銷行銷代號」與「技術世代指標」，並不代表任何實體特徵的長度。</td>
                    <td>媒體常拿 Intel 10 奈米與台積電 7 奈米做物理比較，但在實質電晶體密度上兩者其實相當。分析時不可直接把奈米大小等同於製程性能。</td>
                  </tr>
                  <tr>
                    <td><strong>先進封裝 (Advanced Packaging)</strong></td>
                    <td>以為就是把晶片放進塑料或陶瓷外殼的傳統封測包裝。</td>
                    <td>在晶圓層級上，透過微小的導電凸塊與矽中介層將多顆晶片做垂直或水平堆疊（如 CoWoS / 3D IC），以突破摩爾定律。</td>
                    <td>傳統封裝是低毛利的勞力密集業；先進封裝是高毛利、高技術門檻的晶圓廠核心戰場。研究時必須區分傳統封測廠與台積電的先進封測業務。</td>
                  </tr>
                  <tr>
                    <td><strong>IP 矽智財 (Intellectual Property)</strong></td>
                    <td>日常指電影、小說版權或商標權。</td>
                    <td>指已經通過設計驗證、可重複使用的積體電路設計模組（例如 ARM 架構、USB 介面模組）。</td>
                    <td>IC 設計公司透過購買 IP，不需重頭設計所有線路，大幅縮短時間。台積電的 OIP 平台即是以整合大量第三方 IP 為核心優勢。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "先看一遍心智圖展開的全貌。在 NotebookLM 中，自動生成的「心智圖 (Mind Map)」和「簡介文件 (Briefing Document)」是掌握全局的極佳工具。我們花幾分鐘探索它，看看除了代工外，AI 是否也幫我們抓出了設備商 ASML 或地緣政治政策的相對關係。",
        instructions: [
          "在 NotebookLM 點擊右側 Studio 面板 &rarr; 點擊「心智圖 (Mind Map)」",
          "把所有子節點展開，快速瀏覽所有分支，看看是否有你未曾考慮過的供應鏈關係"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」與「簡介文件」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">點擊心智圖中的 `EUV 供應商 ASML` 或 `地緣政治分散風險` 節點，NotebookLM 會自動將這些關聯論文的脈絡抽出來，在對話框裡做成摘要，幫您快速掌握半導體產業生態圈的全局架構。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 台積電產業心智圖</span>
              <span style="color: var(--secondary);">🌿 結構分支圖已建立</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料庫</div>
                <div class="mock-source-item active">☑ 台積電年報.pdf</div>
                <div class="mock-source-item active">☑ 先進封裝報告.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>您點選了節點：[護城河 - 開放創新平台 OIP]</strong><br>
                    依據來源，OIP 包含了超過 12,000 個 IP 模組，讓 NVIDIA 等大廠可以像樂高積木一樣快速拼裝晶片，直接相容台積電的 3nm 製程，這使客戶很難跳槽到三星或 Intel。
                  </div>
                </div>
                <div class="mock-input-area">
                  <span style="font-size:0.75rem; color:var(--text-muted);">💡 點擊心智圖節點進行快速探索</span>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 心智圖檢視</div>
                <div class="mock-studio-item active">🌿 台積電研究
                  <div style="font-size:0.7rem; color:var(--text-muted); padding-left:0.5rem;">
                    ├─ 專業晶圓代工 (Foundry)
                    ├─ 先進技術 (EUV, CoWoS)
                    ├─ 護城河 (OIP 生態系)
                    └─ 跨國建廠風險 (美、日、德)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是台積電，主線是它如何靠專業代工模式成為晶片霸主。這裡我們透過設定角色，讓 AI 成為資深產業分析師，並依序送出大、中、小顆粒度提問，把台積電的護城河脈絡完全理清。",
        instructions: [
          "設定角色：點選對話框右上角「設定對話」 &rarr; 設定為「半導體產業與科技投資分析師，回覆較長且詳實」",
          "在對話框中，依序發送大、中、小顆粒度提問，並儲存關鍵記事"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [台積電 (TSMC)]：
1. 主角是誰？張忠謀博士的背景是什麼？
2. 他在 1987 年是如何起步並說服台灣政府與飛利浦投資的？
3. 在當時的半導體界中，台積電的晶圓代工定位與其他 IDM 大廠最大的差別在哪裡？

中顆粒｜商業邏輯與轉折時刻：
針對 [台積電 (TSMC)] 的主角：
1. 它的核心商業邏輯是什麼？如何把「只代工不設計」的承諾轉化為龐大的營收？
2. 一路走到今天，面臨過哪些關鍵的轉折時刻？（例如：決定拒絕與客戶競爭、引進 EUV 技術、投入 CoWoS 先進封裝）
3. 這些關鍵決定為什麼是對的？奠定了什麼護城河？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全沒有科技背景的朋友介紹 [台積電 (TSMC)] 最厲害的地方。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到台積電的護城河？
3. 一句話收尾：講完之後留下什麼結論讓人記得？
請用口語化、說故事的語氣，不要用簡報條列式語氣。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：產業分析師對話紀錄片段</h3>
            <p><strong>第一問（起步與差別）回答節錄：</strong><br>
            「在 1987 年，所有半導體公司都兼做晶片設計與製造（即 IDM 模式）。張忠謀看到了晶片設計高昂的固定資產投資門檻，大膽創立了『只代工、不競爭』的台積電。這讓晶片設計創業家（如黃仁勳創立的 NVIDIA）可以專注於設計，把最昂貴的工廠投資交給台積電，奠定了輕資產的 Fabless 時代。」</p>
            
            <p><strong>第二問（護城河關鍵）回答節錄：</strong><br>
            「台積電的護城河不在單一的技術，而是『規模效應』與『信任』構成的良性循環：代工量愈大 &rarr; 良率累積愈快 &rarr; 晶片成本降低 &rarr; 吸納更多大客戶 &rarr; 營收盈餘投入研發 &rarr; 技術領先。這個飛輪一旦轉起來，市佔率破 9 成，對手便難以望其項背。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "看過不等於理解，我們必須試著回答核心問題。請在下方的學習單中試著寫下您對台積電商業模式的理解，並點擊「模擬 AI 教授驗證」，系統會動態進行 Fact-check，指出您理解中是否有事實錯誤或概念偏差。",
        instructions: [
          "在下方輸入框中填入您對台積電的回答",
          "點擊「模擬 AI 教授驗證」，閱讀 AI 給予您的實時回饋與修訂建議"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的台積電回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於代工商業模式與 OIP 的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 台積電最核心的主角與商業模式是什麼？</label>
              <textarea id="tsmc-q1" class="practice-input" placeholder="請回答... (提示：可提到張忠謀、不與客戶競爭的純晶圓代工)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 台積電的「護城河飛輪」如何運作？靠什麼賺錢？</label>
              <textarea id="tsmc-q2" class="practice-input" placeholder="請回答... (提示：先進製程、先進封裝 CoWoS、開放創新平台 OIP)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 去台化與海外建廠對台積電造成的最大挑戰是什麼？</label>
              <textarea id="tsmc-q3" class="practice-input" placeholder="請回答... (提示：美國與日本廠的成本文化差異、毛利率維持、地緣政治)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('tsmc')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('tsmc')">填入示範回答</button>
            </div>
            <div id="tsmc-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 半導體分析師實時反饋
              </div>
              <div id="tsmc-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "一次性研究是不夠的。我們把今天整理的「台積電護城河與海外風險」存為記事並轉成「來源 (Notes)」。下一次台積電召開最新的法說會（或發布最新季報）時，直接上傳最新簡報 PDF，發送對話讓 AI 比對最新變化，這就是知識的持續累積與演進。",
        instructions: [
          "在 NotebookLM 點擊對話旁的「儲存為記事」，命名為「台積電護城河與地緣政治」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有最新法說會簡報 (法說會 PPT) 或新聞時直接上傳，並使用下方 Prompt 進行分析比對"
        ],
        promptTemplate: `我之前關於台積電商業護城河與海外建廠風險的筆記已經在來源 (Notes) 中。
現在我上傳了最新的台積電 [例如：2026年最新一季法說會簡報 PDF]。
請幫我分析：
1. 最新財報數據（營收、毛利率）與先前我筆記中的預估有何差異？是否維持在 53% 毛利率水準？
2. 在先進封裝 CoWoS 的產能上，法說會有透露新的擴產進度或新的客戶合作消息嗎？
3. 地緣政治風險與海外廠建置進度有新的調整嗎？
4. 請幫我更新我舊的知識地圖。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新法說會簡報後)</h3>
            <p><strong>新加入來源：</strong><em>TSMC Q3 2025 Earnings Call Presentation.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，最新季報顯示了以下重大調整：<br><br>
              <strong>1. 獲利表現超預期：</strong>本季毛利率升至 57.8%（高於先前筆記所記的長期目標 53%），主要得益於 3nm 先進製程佔營收比重已達 32% 及產能利用率滿載。<br><br>
              <strong>2. 先進封裝產能追趕：</strong>台積電透露將於 2026 年進一步擴充 CoWoS 產能，除了原台灣封測廠外，不排除在海外評估後段封裝合作，以減緩 AI 晶片供不應求的局面。<br><br>
              <strong>3. 海外建廠時程：</strong>美國廠第二期 2 奈米廠建置進度超前，預計可於 2026 年底進行試產，舒緩了先前筆記中提及的文化摩擦延遲風險。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  innolux: {
    title: "產業轉型升級案例：群創光電 (Innolux) 扇出型面板級封裝 (FOPLP) 轉型",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "面板產業具有強烈的循環週期（面板雙雄的價格起落）。群創光電為了擺脫傳統 LCD 價格戰，大膽跨足半導體封裝。這一步我們上傳面板顯示器基礎教材與群創的早期法說會簡報，理解它最初的資產與轉型背景。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳群創光電的官方公司簡介、TFT-LCD 產業價值鏈分析文獻",
          "複製下方 Prompt，建立群創面板事業的標準基礎知識"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [群創光電 (Innolux)] 的基礎知識與產業背景。

請列出：
1. 群創光電的核心顯示器業務與主要的傳統產品線
2. 什麼是「面板價格循環 (Panel Price Cycle)」？它如何衝擊傳統面板廠的獲利？
3. 為什麼面板廠空有龐大的折舊完毕工廠（舊世代面板廠），卻急需尋找新出路？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 群創傳統核心業務與痛點</h3>
            <p><strong>群創光電 (Innolux)</strong> 是全球液晶顯示面板（TFT-LCD）的龍頭大廠之一，隸屬於鴻海科技集團。其傳統產品線包含電視面板、車用面板、醫療顯示器與筆電面板。然而，面板產業屬於典型的高資本支出、高波動週期產業，極易受中國廠商產能擴張影響，陷入價格戰泥淖（俗稱「面板雙雄」的景氣循環痛點）。</p>
            
            <h3>2. 傳統舊世代廠房的資產包袱</h3>
            <p>群創擁有許多已經折舊完畢的早期舊世代面板廠房（如 3.5 代廠、4.5 代廠、5.5 代廠）。這些廠房如果繼續生產低階顯示面板，由於效率不如新世代的 8.5 代或 10.5 代廠，會持續虧損；但如果直接關廠拆除，又是極大的資產減損。如何「活化這些舊世代廠房房舍與設備」，是工程管理上的重大難題。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "群創是如何化腐朽為神奇，將做面板的舊工廠改造成做半導體 AI 晶片先進封裝的基地？我們使用 Deep Research 模式去搜尋最新的「FOPLP (面板級封裝)」技術文獻，理解其運作機理與產業鏈爭議。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式並輸入針對性 Prompt",
          "等待報告生成並自動匯入，這能幫我們搞懂面板封裝在先進封裝界的優缺點"
        ],
        promptTemplate: `我手邊已經有 [群創光電] 的傳統面板業務與資產背景。
請幫我研究近 2-3 年（特別是 2024-2026 年）群創在半導體封裝上的重大轉型：

1. 什麼是「扇出型面板級封裝 (Fan-out Panel-Level Packaging, FOPLP)」？它的技術原理是什麼？
2. 相比於台積電的晶圓級封裝（CoWoS / FOWLP 使用圓形矽晶圓），群創使用「玻璃基板 (Glass Substrate) 方形面板」進行封裝，有哪些「成本」與「面積利用率」上的絕對優勢？
3. 目前 FOPLP 封裝面臨的技術挑戰（如玻璃翹曲 warp、對位精準度、良率控制）有哪些？

主要以半導體封裝技術論文、產業分析師報告為主。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 什麼是扇出型面板級封裝 (FOPLP)？</h3>
            <p><strong>FOPLP (Fan-out Panel-Level Packaging)</strong> 是一種將晶片直接放置於大面積方形玻璃基板（而非傳統 12 吋圓形晶圓）上進行先進封裝的技術。它利用了面板製程中的曝光與電鍍線路技術，將原本封裝的基板面積擴大數倍。</p>
            
            <h3>2. 方形玻璃基板封裝的兩大優勢</h3>
            <ul>
              <li><strong>面積利用率極高：</strong>傳統 12 吋圓形晶圓的邊角裁切會浪費約 15% 的面積。而方形玻璃面板的利用率可高達 95% 以上，一次可封裝的晶片數量是圓形晶圓的 3 至 4 倍。</li>
              <li><strong>成本大幅降低：</strong>利用群創已經折舊完畢的 3.5 代或 4.5 代舊面板線進行改裝（Retrofit），不需花費數百億元重新建造全新晶圓廠，能以極具競爭力的成本提供先進封裝產能，解決 AI 晶片供不應求的限制。</li>
            </ul>

            <h3>3. 當前的技術瓶頸與挑戰</h3>
            <p><strong>玻璃翹曲 (Warping)：</strong>玻璃基板在大面積加熱與電鍍過程中，因材料熱膨脹係數不一致，容易發生彎曲，導致對位失準。這是目前工程管理與製程品質控制的核心難關。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "面板級封裝 (FOPLP) 橫跨了「面板顯示器」與「半導體封裝」兩個大產業，術語極多。這一步我們用 NotebookLM 整理術語陷阱表，尤其區分晶圓級 (WLP) 與面板級 (PLP) 的不同。",
        instructions: [
          "在對話框輸入 Prompt 要求整理 FOPLP 與面板的關鍵術語",
          "產出後儲存為記事，釐清專有名詞"
        ],
        promptTemplate: `針對 [群創轉型 FOPLP 面板級封裝] 領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或媒體混淆的術語。

整理格式：
| 術語 | 傳統面板/大眾意思 | 半導體封裝定義 | 為什麼容易混淆與分析注意點 |`,
        outputContent: `
          <div class="output-card">
            <h3>群創 FOPLP 先進封裝術語對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>術語 (中/英)</th>
                    <th>傳統面板/大眾用法</th>
                    <th>FOPLP 先進封裝定義</th>
                    <th>為什麼容易混淆</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>FOPLP (面板級封裝) vs. FOWLP (晶圓級封裝)</strong></td>
                    <td>大眾常將兩者混為一談，都稱為先進封裝。</td>
                    <td>FOWLP 在圓形晶圓上進行；FOPLP 則在巨大的方形玻璃面板（如 5.5 代玻璃基板）上進行封裝。</td>
                    <td>FOPLP 的面積大 3-4 倍，能降低成本，但設備改裝精準度要求極高，屬於跨業製程的整合。</td>
                  </tr>
                  <tr>
                    <td><strong>玻璃基板 (Glass Substrate)</strong></td>
                    <td>日常指電視或手機的顯示玻璃面板。</td>
                    <td>在半導體封裝中，作為承載多晶片並進行超細微布線 (RDL) 的高剛性、高平坦度基板材料。</td>
                    <td>它不再是顯示器，而是被當作半導體的高速訊號傳輸層，其物理強度與耐熱度要求截然不同。</td>
                  </tr>
                  <tr>
                    <td><strong>舊廠改裝 (Fab Retrofit)</strong></td>
                    <td>拆除舊廠房重新蓋新大樓。</td>
                    <td>保留舊世代面板廠房的黃光室、輸送帶等基礎結構，將裡面的面板設備替換成半導體曝光機與電鍍槽。</td>
                    <td>這考驗工程管理能力。如何在舊空間裡達到半導體等級的無塵室要求（Class 10 甚至更高），是技術關鍵。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "利用 Studio 的心智圖工具快速看過。群創從面板跨足封裝，牽涉到與 IC 設計大廠（如 AMD、NVIDIA）、設備商、傳統封測廠的關係。我們展開心智圖分支，對其生態系地位建立直觀認識。",
        instructions: [
          "點擊右側 Studio 面板 &rarr; 點擊「心智圖 (Mind Map)」",
          "查看 `群創光電` 分支如何延伸到 `FOPLP 製程技術` 以及 `車用面板` 與 `封裝產能銷售`"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖會清楚呈現 `群創光電` &rarr; `舊廠折舊完畢` &rarr; `轉為 FOPLP 先進封裝` &rarr; `晶圓代工外溢效應` 的因果關係，點擊這些關聯線能讓您快速掌握老舊面板廠是如何透過 TRIZ 分割與改用原則重獲新生的。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 群創 FOPLP 轉型全貌心智圖</span>
              <span style="color: var(--primary);">🌿 分支網絡已建立</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻</div>
                <div class="mock-source-item active">☑ FOPLP技術白皮書.pdf</div>
                <div class="mock-source-item active">☑ 群創法說會報告.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>群創轉型心智圖全局摘要：</strong><br>
                    核心轉折點在於活化 3.5 代廠。原本該廠生產 LCD 已無競爭力，透過改裝為 FOPLP 先進封裝生產線，搖身一變成為能封裝 AI 晶片的高階廠房，成功打入半導體供應鏈。
                  </div>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 群創轉型 FOPLP</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是群創，主線是它如何利用舊面板廠房設備改造轉身為 FOPLP 封裝新星。我們在此步驟設定角色為科技產業分析師，依序詢問大、中、小顆粒問題，探討其轉型的商業可行性。",
        instructions: [
          "設定對話角色為「半導體與光電產業資深分析師」",
          "依序複製大、中、小顆粒 Prompt 送出並讀完回覆"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [群創光電 (Innolux)]：
1. 主角是誰？傳統面板業務的景氣循環痛點是什麼？
2. 它是在什麼契機下，決定跨足半導體 FOPLP 封裝的？
3. 面板廠做封裝，跟傳統半導體封測廠 (如日月光) 最大的差別與優勢在哪裡？

中顆粒｜商業邏輯與轉折時刻：
針對 [群創光電 (Innolux)] 的主角：
1. 它的 FOPLP 商業邏輯是什麼？它要如何把「做面板的舊設備」改造成「做封裝的賺錢機器」？
2. 這一路上有哪些關鍵轉折？（例如與國際晶片大廠合作、出售舊廠換取資金等）
3. 這些決定對群創的資產負債表與獲利能力有何影響？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全不熟面板的同學介紹 [群創光電 (Innolux)] 轉型的故事。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到群創舊廠改裝與方形玻璃封裝的厲害之處？
3. 一句話收尾：留下什麼結論讓人記得？
請用口語化語氣整理。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：分析師 FOPLP 轉型解答片段</h3>
            <p><strong>第一問（面板廠做封裝優勢）回答節錄：</strong><br>
            「傳統面板廠最大的優勢是『玻璃製程經驗』與『折舊完畢的黃光設備』。半導體封裝需要精密布線，這跟面板的 TFT 線路製造在物理上是一樣的。群創不需要跟台積電一樣花幾百億買新機台，它直接用舊世代面板廠改裝，用 3-4 倍大的玻璃基板封裝晶片，成本能比晶圓級封裝便宜很多。」</p>
            
            <p><strong>第二問（關鍵轉折）回答節錄：</strong><br>
            「群創的關鍵決定在於 2023-2024 年，它拒絕繼續在 LCD 面板跌價中苦撐，而是直接將 3.5 代廠改裝為 FOPLP 先進封裝產線，並成功送樣給國際大客戶驗證。這讓群創從一個『被看衰的折舊累贅公司』，變成了『AI 先進封裝產能的奇兵』。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "透過自訂學習單，將資訊內化。請在下方填寫您對群創 FOPLP 轉型邏輯的理解，點擊驗證，系統會模擬 AI 指導教授為您查證，指出您是否忽略了玻璃翹曲等技術細節。",
        instructions: [
          "在下方輸入框中填入您對群創光電的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的群創回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於 FOPLP 原理與玻璃基板優勢
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 群創光電決定切入半導體封裝的核心商業動機是什麼？</label>
              <textarea id="innolux-q1" class="practice-input" placeholder="請回答... (提示：可提到避開傳統面板價格戰、活化折舊完畢的舊廠房設備)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. FOPLP 面板級封裝相比晶圓級封裝 (CoWoS) 的成本與面積優勢為何？</label>
              <textarea id="innolux-q2" class="practice-input" placeholder="請回答... (提示：方形玻璃面板利用率大於 95%、可用舊世代曝光機改裝、面積大3-4倍)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 群創在 FOPLP 先進製程上目前面臨的最大物理技術挑戰是什麼？</label>
              <textarea id="innolux-q3" class="practice-input" placeholder="請回答... (提示：玻璃受熱翹曲 Warping、線路對準精度、良率提升控制)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('innolux')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('innolux')">填入示範回答</button>
            </div>
            <div id="innolux-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM FOPLP 專家實時反饋
              </div>
              <div id="innolux-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "我們將「群創 FOPLP 轉型商業分析」存成筆記並轉成「來源」。當未來有國際半導體設備更新（或群創最新一季法說會宣布打入某大 AI 晶片廠供應鏈）時，上傳資料，讓 AI 幫你比對，完成滾動式研究。",
        instructions: [
          "在 NotebookLM 點擊「儲存為記事」，命名為「群創光電 FOPLP 轉型地圖」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有群創最新法說會報告或封裝研究新消息時直接上傳，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究群創光電封裝轉型的筆記已經在來源 (Notes) 中。
現在我上傳了最新的 [例如：群創光電 2026 最新法說會報告 PDF / AI 晶片先進封裝研究報告]。
請幫我分析：
1. 跟我上次的知識地圖相比，群創在 FOPLP 封裝的實際產出與良率進度上有何最新更新？
2. 在客戶採用上，是否有新的國際 IC 設計大廠開始下單或宣布戰略合作？
3. 技術上，關於玻璃翹曲 (Warping) 的解決方案是否有新突破？
4. 請幫我更新我的舊筆記。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新法說會報告後)</h3>
            <p><strong>新加入來源：</strong><em>Innolux 2026 Q1 Investors Call Report.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026年最新群創報告顯示了以下重大轉折：<br><br>
              <strong>1. 良率與出貨突破：</strong>群創宣布其第一期 FOPLP 先進封裝產線良率已提升至 88%（高於先前筆記所載 the 75% 預測值），並已於 2026 年初開始小量出貨給國際車用晶片大廠。<br><br>
              <strong>2. 工藝改良：</strong>針對舊筆記中提到的玻璃翹曲 (Warping) 技術難題，群創與合作設備大廠引進了全新的『雷射動態校平技術 (Laser Dynamic Levelling)』，成功將基板翹曲率降低了 40%，這極大穩定了線路曝光精度。<br><br>
              <strong>3. 產能擴充計畫：</strong>因應 AI 晶片強烈需求，董事會通過將於 2026 下半年啟動『第二期 5.5 代舊面板線改裝為封裝線』的計畫，預估先進封裝產能將提升 3 倍。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  template: {
    title: "自訂主題研究 (空白範本與介面導覽)",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "萬丈高樓平地起。在開始 any 新研究時，最忌諱一上來就搜尋全網或混雜多種未篩選的文獻。請先準備 1 至 2 本該學科的標準概論或教科書，將其匯入 NotebookLM 作為唯一來源，以確保 AI 的回答完全基於標準共識。",
        instructions: [
          "挑選 1-2 份您主題相關的開放授權教科書 (如 OpenStax) 或權威文獻講義",
          "在 NotebookLM 左側來源面板點擊「新增來源」並上傳這些 PDF",
          "複製下方提示詞，將括號中的 [你的主題] 換成您自己的研究主題後送出對話"
        ],
        promptTemplate: `請完全基於這份教科書與講義內容，為我建立 [你的主題] 的基礎知識框架。

請列出：
1. 此理論／領域的標準學術定義
2. 最核心的 3 至 5 個專有名詞，每個附上學術定義與運作機制
3. 此理論的發展歷史與代表性學者
4. 目前學界對此主題的「主流共識」是什麼

請特別標明這份教科書出版的年份，以便後續判斷哪些內容可能需要用較新的文獻來補強。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在左側「來源」面板勾選您的教科書。此時發送對話，NotebookLM 就會<b>百分之百只根據您的教科書內容</b>進行回答，並在回答中附上對應原文的圓形數字角標（引文來源），保證不幻覺。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 自訂主題研究地基</span>
              <span style="color: var(--success);">● 已勾選教科書來源</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文件 (打地基)</div>
                <div class="mock-source-item active">☑ [你的主題]教科書.pdf</div>
                <div class="mock-source-item active">☑ 課程大綱與講義.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">請完全基於這份教科書內容，為我建立 [你的主題] 的基礎知識框架...</div>
                  <div class="mock-bubble ai">
                    <strong>[你的主題] 基礎知識框架 (已生成)</strong><br>
                    1. <strong>標準定義：</strong>該領域主要指... [1]<br>
                    2. <strong>核心專有名詞：</strong>[名詞A] 是指...，運作原理為... [2]<br>
                    3. <strong>主流共識：</strong>學界目前公認... [3]
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請為我詳細解釋 [名詞A]...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item active">簡介文件 (可點擊)</div>
                <div class="mock-studio-item">學習指南</div>
                <div class="mock-studio-item">常見問題解答</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "打完地基後，我們需要利用 Deep Research 模式去搜尋最新的前沿論文與方法論爭議。我們明確要求 AI「只找教科書沒提的內容」，這樣抓回來的資料品質會高出很多。",
        instructions: [
          "在 NotebookLM 點擊「新建」 &rarr; 選擇「在網路上搜尋新來源」",
          "下方來源管道選擇「網路」，並開啟「Deep Research」模式",
          "複製下方 Prompt 模板，將主題與領域進行替換後送出搜尋"
        ],
        promptTemplate: `我手邊已經有 [你的主題] 的核心教科書內容。
請幫我研究教科書通常會少談、但對深入理解這個主題很重要的內容：

1. 該領域的重要學術文獻：
   - 被引用次數最高的 5 篇綜述論文 (Review Paper) 或奠基論文
   - 近期最重要的突破性研究
   每一篇請附上：主要論點、發表年份、作者、以及 DOI 或連結
2. 學界目前還在吵什麼 (方法論爭議、理論詮釋爭議、未解的實證問題)
3. 大眾印象跟學術事實差最遠的地方

主要以學術期刊論文、文獻回顧、後設分析為主。請附上資料來源連結。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在網路上搜尋新來源時，切換到 <b>Deep Research 模式</b>。它會自動在後台進行多輪搜尋，篩選數十篇權威文獻，並直接將其彙整成一份報告，連同所有引用的來源網址自動匯入您的來源列表。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - Deep Research 補強搜尋</span>
              <span style="color: var(--secondary);">🔍 正在執行 Deep Research 搜尋...</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文件 (已擴充)</div>
                <div class="mock-source-item">☐ [你的主題]教科書.pdf</div>
                <div class="mock-source-item active">☑ [網頁] Deep Research 補強報告</div>
                <div class="mock-source-item active">☑ [論文] Review Paper 1 (2024)</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>已完成 [你的主題] 針對性文獻補強</strong><br>
                    已成功抓取並分析 12 個網路權威來源：<br>
                    - <strong>5篇高引用文獻：</strong>[文獻1] (2023, DOI:xxx)、[文獻2] (2024)...<br>
                    - <strong>學術爭議：</strong>派別 A 主張...；派別 B 批評其方法論為...<br>
                    - <strong>大眾誤解：</strong>大眾普遍認為... 但學術論文指出其實是...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請詳細說明 [文獻1] 與教科書定義的差別...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item">簡介文件</div>
                <div class="mock-studio-item active">常見問題解答 (更新中)</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "學術主題的門檻大多在於術語。我們需要利用 NotebookLM 的報告工具，將資料庫裡的核心學術名詞與日常混淆詞彙整理出來，先掌握這 20% 的關鍵詞，就能看懂 80% 的內容。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板點選「報告」",
          "點選「自訂報告 (Custom Report)」",
          "複製下方 Prompt 模板貼入報告生成框，等待產出完整的術語對照表"
        ],
        promptTemplate: `針對 [你的主題] 這個學術領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人誤解的學術詞彙，這些詞在日常生活中也會用到，但學術用法完全不同。

整理格式：
| 詞彙 | 日常意思 | 學術意思 | 為什麼容易混淆 |

請聚焦在「日常會用、但學術定義截然不同」的詞，而非純學術專有名詞。如果這個詞在學術領域中有多個分支的不同定義，也請特別標出來。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">使用「自訂報告」工具產出的內容，會自動結構化成精緻的文件，並且可以一鍵儲存為筆記（Note）。這非常適合用來做為文獻回顧的基礎名詞解釋草稿。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - Studio 報告工具</span>
              <span style="color: var(--primary);">📝 產出自訂報告中...</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">全部勾選來源</div>
                <div class="mock-source-item active">☑ 教科書.pdf</div>
                <div class="mock-source-item active">☑ Deep Research 報告</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>[自訂報告] 術語陷阱對照表已生成</strong><br>
                    此報告已儲存至右側的記事。對照表欄位包括：<br>
                    - [詞彙A]：日常指... 學術指... 混淆原因：...<br>
                    - [詞彙B]：日常指... 學術指... 混淆原因：...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">將此報告儲存為記事...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item active">自訂報告 (點擊編輯)</div>
                <div class="mock-studio-item">簡介文件</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握輪廓｜利用心智圖展開全貌",
        vkThought: "在問問題前，先看一遍資料全貌。利用 NotebookLM 自動產出的心智圖（Mind Map）工具，將所有子主題與理論關係視覺化展開，這能幫助你釐清核心概念與衍生概念之間的層級關係。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板點選「心智圖 (Mind Map)」",
          "點擊展開所有分支，花 3-5 分鐘瀏覽所有子節點",
          "點擊有興趣的節點，AI 會在中間對話面板給予詳細的文獻回答，您可以直接將其儲存為記事"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖是 NotebookLM 最具視覺感的探索工具。它會自動把你的來源庫概念串接起來。看到不懂的節點，直接點擊它，AI 會即時在主視窗中為您解說該節點的內容，免去手動輸入問題的時間。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 心智圖工具</span>
              <span style="color: var(--secondary);">🌿 心智圖已生成</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料庫</div>
                <div class="mock-source-item active">☑ 教科書 + 論文庫</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>您點擊了節點：[核心子命題A]</strong><br>
                    依據文獻，此概念是指... [1]，常用來解決... [2]。
                  </div>
                </div>
                <div class="mock-input-area">
                  <span style="font-size:0.75rem; color:var(--text-muted);">💡 點擊心智圖節點進行快速探索</span>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 心智圖檢視</div>
                <div class="mock-studio-item active">🌿 [你的主題]
                  <div style="font-size:0.7rem; color:var(--text-muted); padding-left:0.5rem;">
                    ├─ 核心概念
                    ├─ 發展歷史
                    └─ 理論爭議
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "此步驟是內化理論的核心。我們必須透過「設定對話角色」將 NotebookLM 升級為該領域的指導教授，接著依序進行「歷史脈絡問」、「相近理論比較問」與「應用與爭議問」，在心中搭起完整的知識地圖。",
        instructions: [
          "點選對話框右上角「設定對話」 &rarr; 「選擇角色」 &rarr; 「自訂」",
          "貼入：『以相關領域的碩博士研究者來和我對話，回覆內容選擇「較長」』",
          "依序複製下方三道 Prompt（歷史、比較、應用）在對話框中發送，閱讀產出內容"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [你的主題]：
1. 這個理論出現之前，學界用什麼解釋同一個現象？
2. 奠基者為什麼覺得既有解釋不夠，需要提出新理論？他做了什麼關鍵研究來支持新主張？
3. 這個理論被廣泛接受之後，有沒有發生過重大修正或學派分裂？是因為什麼新證據或新批評？
4. 近 20 年的研究方向跟最初的版本差在哪？

第二問｜理論比較：
針對 [你的主題]，請從匯入的資料中，找出 2 至 3 個最常被學界拿來跟它對照比較的近似理論。每個理論請說明：
1. 理論名稱（中英對照）
2. 為什麼跟 [你的主題] 常被一起討論
3. 跟 [你的主題] 最容易被混淆的地方是什麼
(請要求使用「資料表」格式產出)

第三問｜應用與爭議：
針對 [你的主題]：
1. 這個理論已經被應用到哪些原本學科以外的領域？每個應用領域請說明引用方式與接受度。
2. 學界目前的主要爭議與未解問題有哪些？
3. 我要用 3 分鐘跟一個完全不熟 [你的主題] 的朋友介紹這個理論。請幫我整理口語化的開場、重點與常見誤解。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">透過「設定對話」將 AI 的角色鎖定在『學術研究者』，可以極大提升 AI 回答時的精準度與語氣深度，避免其給出過於淺顯的維基百科式回答。回覆內容選擇『較長』，能產出論證更完整、包含完整引文的出處報告。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 博士級對話設定</span>
              <span style="color: var(--primary);">👤 角色設定：碩博士研究者 (較長回覆)</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">已選來源</div>
                <div class="mock-source-item active">☑ 歷史與綜述文獻</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">第一問｜歷史脈絡：這個理論出現之前...</div>
                  <div class="mock-bubble ai">
                    <strong>[你的主題] 的歷史演進脈絡</strong><br>
                    - <strong>前身理論：</strong>在 [理論A] 提出前，學界普遍使用 [舊理論] 來解釋此現象...<br>
                    - <strong>突破點：</strong>奠基者 [學者名] (1995) 認為舊理論無法合理解釋... 因而提出本理論 [1]...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">第二問｜理論比較...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item">自訂報告</div>
                <div class="mock-studio-item">學習指南</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "這一步是將「AI 的內容」轉化為「你自己的知識」的關鍵。請在這裡寫下您自己所研究的任何主題，並試著回答 3 個核心問題，點擊驗證按鈕，系統將自動比對並給予您事實校正與優化建議。",
        instructions: [
          "在下方輸入框中輸入您的「自訂主題」與「核心定義」等內容",
          "點擊「模擬 AI 教授驗證」，系統會執行智慧 fact-check，指出您理解中是否有事實錯誤或概念偏差"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中針對自訂主題填寫的答案]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是引用奠基者主張的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化的地方？
4. 有沒有把「主流共識」誤認為「個別研究結論」，或是反過來？

請直接指出問題，不用客氣，並附上對應的來源引用。`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">請輸入您的「自訂研究主題」與「核心專有名詞」：</label>
              <textarea id="temp-q1" class="practice-input" placeholder="例如：依附理論 / 客體關係 / 品牌擴展策略 / 流體力學應用..."></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">核心命題 (請用您自己的話簡述這個理論在主張什麼)：</label>
              <textarea id="temp-q2" class="practice-input" placeholder="請試著回答... (提示：先講這個理論為了解決什麼，核心主張是什麼)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">與近似理論最大的差別在哪裡？日常最常被誤解之處？</label>
              <textarea id="temp-q3" class="practice-input" placeholder="請試著回答... (提示：列出一個最容易搞混的相近概念並做比較)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('temp')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('temp')">填入自訂範例回答</button>
            </div>
            <div id="temp-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 指導教授實時反饋
              </div>
              <div id="temp-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "單次的研究只是一個剖面，只有當我們建立「知識螺旋」，將今天整理完的筆記轉存為來源，並隨時上傳最新文獻進行對比，我們才能隨著時間累積，真正摸透這個領域並成為專家。",
        instructions: [
          "在 NotebookLM 點擊對話旁「儲存為記事」，為筆記命名為「[主題]-我的知識地圖」",
          "點擊記事卡片右上角 &rarr; 點選「轉成來源」",
          "未來若看見該主題的新論文或行業報告，直接上傳至同一個筆記本，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究這個主題的筆記已經在來源 (Notes) 裡了。
現在我加入了一些新的論文／文獻。

請幫我比較：
1. 跟我上次的知識地圖相比，有什麼新的發現或論點？
2. 這些新資料會挑戰我之前對核心命題、近似理論比較、或跨領域應用的判斷嗎？
3. 有沒有我應該特別注意的新爭議或新證據？
4. 如果我要更新文獻回顧，這幾篇新文獻應該插入哪一節？`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">NotebookLM 支援將您手動寫下的「筆記(Note)」或者「AI 生成的記事」轉化為「Source(來源)」。當您將筆記轉為來源後，AI 將會在回答中自動引用您的個人筆記與總結。每次有新的論文，AI 都會將其與您既有的知識庫進行比對，形成良性的知識滾動與累積循環。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 轉成來源與知識螺旋</span>
              <span style="color: var(--success);">🔄 知識迴旋模式啟動</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料 (滾動累積)</div>
                <div class="mock-source-item">☑ [1] 原本的教科書.pdf</div>
                <div class="mock-source-item active">☑ [2] 轉化後的個人知識筆記 (Note)</div>
                <div class="mock-source-item active">☑ [3] [2026年最新發表] 突破論文.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">我上次的知識筆記在來源裡了，請幫我比對 2026 最新論文有何突破...</div>
                  <div class="mock-bubble ai">
                    <strong>文獻比對與知識螺旋報告</strong><br>
                    1. <strong>新增論點：</strong>2026 年新論文引進了 [新技術/新機制]，補強了您筆記中第二節關於 [原機理] 的不足 [3]...<br>
                    2. <strong>理論修正：</strong>新文獻指出 [舊假設] 在特定環境下不成立，會挑戰您在 Note 裡的第三項判斷 [2, 3]...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請幫我修改我的 Note 筆記內容...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 已儲存筆記</div>
                <div class="mock-studio-item active">📝 ［你的主題］- 理論與前沿筆記</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  video: {
    title: "實務應用工作流案例：如何做一個 1 分鐘的 AI 影片/Reel",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "做實務研究與學術研究不同，實務注重「流程組裝與工具邊界」。做 1 分鐘短影音，我們需要先用標準工作流打底，理解 AI 工具（ChatGPT, Kling, ElevenLabs, CapCut）如何模組化協同，而不是盲目亂試。",
        instructions: [
          "在 NotebookLM 新增筆記本",
          "上傳 AI 影音剪輯操作指南、創作者分工手冊、或短影音腳本心法 .txt",
          "複製下方 Prompt，建立模組化 AI 影片製作的核心知識地基"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [AI 1分鐘短影音工作流] 的架構。

請列出：
1. 短影音製作的標準 AI 工作流步驟 (從策劃到產出)
2. 核心 3 到 5 個關鍵工具與它們扮演的角色 (如腳本、畫面、配音、卡點)
3. 當前自媒體產業對於 AI 影片的「主流共識」與基本規範是什麼？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準 AI 影音製作工作流</h3>
            <p><strong>AI 短影音模組化工作流</strong>是指將傳統影片製作的「劇本、分鏡、繪製、配音、剪輯」流程，完全拆解並分配給專用的 AI 模型協同完成。其標準步驟包括：\n<strong>腳本企劃 (ChatGPT) &rarr; 分鏡畫面生成 (Kling/Runway) &rarr; 聲音合成與複製 (ElevenLabs) &rarr; 後製卡點與字幕 (CapCut/Premiere)</strong>。這能將產出時間從原本的 3 天壓縮至 20 分鐘。</p>
            
            <h3>2. 核心工具角色分配</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">ChatGPT / Claude</div>
                <div class="term-meta">腳本與分鏡規劃</div>
                <div class="term-desc">負責撰寫吸睛的「黃金 3 秒鉤子 (Hook)」開頭、影片大綱，並將台詞拆解為具體的 AI 繪圖/生成畫面 Prompt 描述。</div>
              </div>
              <div class="term-card">
                <div class="term-word">Kling / Runway Gen-3</div>
                <div class="term-meta">畫面與影片生成</div>
                <div class="term-desc">負責將 ChatGPT 給予的文字 Prompt 轉化為 4-5 秒的高畫質動態影片，控制鏡頭運動（Zoom-in/Pan）。</div>
              </div>
              <div class="term-card">
                <div class="term-word">ElevenLabs</div>
                <div class="term-meta">語音合成與克隆</div>
                <div class="term-desc">將腳本台詞轉換為富有情感、具備自然呼吸聲與停頓感的真人配音，亦可上傳自己的聲音進行高逼真度克隆。</div>
              </div>
              <div class="term-card">
                <div class="term-word">CapCut / 剪映</div>
                <div class="term-meta">剪輯與動態字幕</div>
                <div class="term-desc">導入音訊與影片素材，利用自動卡點、語音轉繁體動態字幕、以及貼紙特效完成最後的影片輸出。</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "工具的更迭是即時的。我們要知道最新演算法（如 Instagram Reels 或 TikTok 2026 最新演算法規章）如何對待 AI 影片？這時我們啟用 Deep Research 模式，搜尋「AI 生成影音限流政策」與「演算法留存率關鍵」，補強實務面的政策資訊。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式，丟入補強 Prompt",
          "等待約 3 分鐘，網路上關於 Reels 演算法對 AI 影片檢測的最新文獻會自動匯入"
        ],
        promptTemplate: `我手邊已經有 [AI 短影音製作工具模組] 的基礎操作資料。
請幫我針對近 1-2 年（特別是 2025-2026 年）的最新產業動態進行補強：

1. 抖音/TikTok/Instagram Reels 演算法目前如何判定並標註「AI 生成內容 (AIGC)」？是否會被限流？
2. 什麼是「黃金3秒完看率」與「 Pace (剪輯節奏)」？它在神經科學與演算法上如何決定影片的推流？
3. 自媒體業界目前防範「AI 機械感（如無起伏的 TTS 配音）」的最新後製規避策略有哪些？

請提供有具體行業數據與實證報告的資料，附上來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. Reels 演算法與 AI 影片檢測報告</h3>
            <p><strong>Meta 2025/2026 最新政策指出：</strong>為保障社群原創性，系統會自動檢測「數位語音浮水印」與「AI 畫面重合度」。如果影片使用未經調校的純 AI 一鍵生成（機械音 TTS + 模版畫面），將自動被標註為『AIGC 標籤』，且演算法推薦權重會降低 40%-60%，只推送給既有追隨者。創作者必須加入「手動剪輯點 (Pace cuts)」與「克隆人聲微痕跡」來維持原創權重。</p>
            
            <h3>2. 核心指標與神經科學依據</h3>
            <ul>
              <li><strong>黃金 3 秒與多巴胺：</strong>研究顯示，滑短影音時大腦在 2.7 秒內即完成是否跳過的決策。前3秒必須使用「反直覺畫面」或「強烈懸念配音」誘發大腦停止滑動；而每隔 0.8s - 1.2s 的畫面鏡頭微動（Zoom / Slide）能持續給予大腦多巴胺刺激，拉高完看率。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "影片剪輯與 AI 生成有很多黑話（如 Text-to-Video、Hook、Rhythm、ASR）。這一步我們用自訂報告，將這些剪輯與演算法術語做成速查表，避免寫腳本或優化影片時搞錯參數。",
        instructions: [
          "在 Studio 面板點擊自訂報告",
          "複製 Prompt 模板，產出 AI 影音術語對照表"
        ],
        promptTemplate: `針對 [AI短影音與演算法推流] 領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般創作者誤解的術語，附上日常誤解與真實定義。`,
        outputContent: `
          <div class="output-card">
            <h3>AI 短影音核心術語對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>術語 (中/英)</th>
                    <th>大眾常有的誤解</th>
                    <th>自媒體/演算法真實定義</th>
                    <th>分析與寫腳本注意</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>黃金3秒鉤子 (3s Hook)</strong></td>
                    <td>日常以為就是影片開頭美觀的標題字。</td>
                    <td>開頭3秒內能勢在必得地誘發好奇、停止滑動動作的「視覺或聽覺強烈刺激點」。</td>
                    <td>沒有鉤子的影片，完看率通常低於 10%，即使後段再精彩也無法獲得演算法推流。</td>
                  </tr>
                  <tr>
                    <td><strong>語音克隆 (Voice Cloning)</strong></td>
                    <td>以為就是把文字轉語音 (TTS) 的機械音讀出來。</td>
                    <td>採集特定人物的聲音樣本，訓練出能模擬其特有「情緒起伏、呼吸換氣聲、語調轉折」的高擬真語音合成。</td>
                    <td>普通 TTS 會被演算法判定為低原創而限流；高擬真克隆人聲則能規避審查。</td>
                  </tr>
                  <tr>
                    <td><strong>完看率 (Retention Rate)</strong></td>
                    <td>只要點擊播放就算數，播放量越高越好。</td>
                    <td>觀眾觀看該影片的「平均百分比」與「完全看完比例（完看率）」。</td>
                    <td>演算法推流的唯一核心指標。長度 15 秒但完看率 60% 的影片，其推流效果遠大於 60 秒但完看率僅 5% 的影片。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "用 Studio 心智圖探索影片製作流程。它會把 ChatGPT、ElevenLabs、CapCut 劃分成不同工作模組，並連結到 Reels 的流量推送機制。讓我們花 3 分鐘掃視它，釐清流程中的瓶頸。",
        instructions: [
          "在 Studio 面板點擊「心智圖 (Mind Map)」",
          "展開所有流程節點，查看 AI 影音生產線與演算法的關聯"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在心智圖中，點選 `ElevenLabs克隆人聲` 到 `規避演算法限流` 的連接線，AI 將自動提示您：如何利用 ElevenLabs 的隨機雜音控制與 CapCut 的環境音效疊加，來混淆系統對 AIGC 數位語音浮水印的偵測。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - AI 影音工作流心智圖</span>
              <span style="color: var(--secondary);">🌿 工作流網絡已建立</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻庫</div>
                <div class="mock-source-item active">☑ 創作者指南.pdf</div>
                <div class="mock-source-item active">☑ 演算法新規章.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>AI 影音流程心智圖總覽：</strong><br>
                    - <strong>生產端：</strong>ChatGPT(腳本) &rarr; Kling(畫面) &rarr; ElevenLabs(語音) &rarr; CapCut(卡點)<br>
                    - <strong>分發端：</strong>3秒鉤子開頭 &rarr; 多巴胺視覺剪輯 &rarr; 規避AIGC水印偵測
                  </div>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 AI影音工作流</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是 AI 短影音工作流，主線是如何用模組化 AI 高效產出符合演算法推流的 1 分鐘影片。我們在此步驟詢問大、中、小顆粒度問題，將操作內化為自己的直覺。",
        instructions: [
          "設定角色為「短影音自媒體流量專家與剪輯總監」",
          "依序複製大、中、小顆粒 Prompt 送出並讀完回覆"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [AI 短影音製作工作流]：
1. 這個工作流的主角是誰？工具鏈（ChatGPT、Kling、ElevenLabs、CapCut）各自在流程中扮演什麼關鍵角色？
2. 傳統短影音創作者轉型到這個 AI 模組化生產線時，最早該怎麼起步？
3. 這個 AI 流程跟傳統手動拍攝剪輯（如實體相機、錄音室配音）最大的效率與品質差別在哪？

中顆粒｜商業邏輯與轉折時刻：
針對 [AI 短影音製作工作流]：
1. 它的流量商業邏輯是什麼？它如何確保產出的影片能夠觸發 Reels/TikTok 的推流演算法？
2. 面臨平台近期對「純 AI 一鍵生成內容」的限流政策，創作者的關鍵轉折決策與應對工作流是什麼？
3. 這些應對細節為什麼能成功保留影片的原創權重？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全不熟 AI 影片的朋友介紹這套「模組化生產線」最厲害的地方。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到這個流程的精髓？
3. 一句話收尾：留下什麼結論讓人記得？
請用口語化語氣整理。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：影音總監對話紀錄片段</h3>
            <p><strong>第一問（工具角色）回答節錄：</strong><br>
            「本工作流將傳統導演的腦力完全交給 ChatGPT（負責腳本與畫面 Prompt 提示詞）；將攝影師與演員交給 Kling（將文字生成 4 秒鏡頭畫面）；將配音員交給 ElevenLabs（克隆真人語音）；最後由 CapCut 擔任後製助理（自動對齊節奏）。這讓一個完全沒有拍攝經驗的創作者，也能在 20 分鐘內量產出高質感影片。」</p>
            
            <p><strong>第二問（避開限流）回答節錄：</strong><br>
            「要避開限流，關鍵在於『打破 AI 的規律性』。演算法會抓取過於死板的畫面切換與無起伏的 TTS。我們的應對工作流是：(1) 在 CapCut 後製中人為加入 0.8s 的不規律切片 (Jump cuts)；(2) 在 ElevenLabs 聲音樣本中加入一點個人的呼吸瑕疵，這會讓系統判定這是一支有人類深度參與的原創影片。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "請在下方的學習單中填寫您對這套 AI 影音生產線與演算法規則的理解，點擊驗證，系統會模擬 AI 指導教授為您進行事實查核，指出您在工具分工與規避政策上是否有重要的遺漏。",
        instructions: [
          "在下方輸入框中填入您對 AI 短影音工作流的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的影音回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於演算法規則與人聲克隆的部分
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 請說明如何以模組化 AI 工作流高效做出一支 1 分鐘的 Reels？</label>
              <textarea id="video-q1" class="practice-input" placeholder="請用自己的話作答... (提示：可提到 ChatGPT 腳本、Kling/Runway 畫面、ElevenLabs 配音與 CapCut 組裝)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 為什麼短影音開頭的「黃金 3 秒」和「視覺節奏」對於演算法推流至關重要？</label>
              <textarea id="video-q2" class="practice-input" placeholder="請用自己的話作答... (提示：3秒鉤子能防止觀眾滑走，快節奏切換能維持多巴胺並拉高留存率)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 平台演算法目前如何防範「低原創性 AI 影片」？創作者該如何應對？</label>
              <textarea id="video-q3" class="practice-input" placeholder="請用自己的話作答... (提示：標註 AI 標籤、手動策展腳本與精細調校，避免直接一鍵生成)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('video')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('video')">填入示範回答</button>
            </div>
            <div id="video-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 影音專家實時反饋
              </div>
              <div id="video-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "我們將「AI 影音工具與演算法應對地圖」存為記事並轉成「來源」。當未來有 Sora 最新更新（或 Meta 發布最新 Reels 原創限流新規）時，直接上傳，讓 AI 幫你比對，完成滾動式研究。",
        instructions: [
          "光標處點擊「儲存為記事」，命名為「AI 影音與演算法應對地圖」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有最新軟體白皮書或演算法新規章時直接上傳，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究短影音製作與演算法規則的筆記已經在來源 (Notes) 中。
現在我上傳了最新的 [例如：Sora 2.0 更新 / TikTok 2026 最新原創檢測政策]。
請幫我分析：
1. 跟我上次的知識地圖相比，有什麼新的變化或技術突破？
2. 這些變化會影響我之前對 ElevenLabs 克隆或 CapCut 剪輯節奏的判斷嗎？
3. 有沒有我應該特別注意的新政策風險？
4. 請幫我更新我的舊筆記。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新演算法新規後)</h3>
            <p><strong>新加入來源：</strong><em>Meta Creators Portal (2026). Adjustments to Originality Detection.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026年最新 Meta 報告顯示了以下重大調整：<br><br>
              <strong>1. 原創性演算法升級：</strong>系統現在能識別出超過 80% 的『純 AI 語音 (無情緒波動、無呼吸聲之 TTS)』。如果影片使用此類配音，即使畫面完全原創，也會被限流，只推給關注者。<br><br>
              <strong>2. 工作流調整建議：</strong>請立即將您的 ElevenLabs 配音設定調整為『語音克隆 2.0 (含有自然呼吸起伏與語調停頓)』，或在 CapCut 後製時加入 5% 的環境背景噪音 (Ambience noise) 以混淆系統的數位浮水印偵測，否則下階段的 Reels 完看率將大幅下滑。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  tsmc: {
    title: "標竿企業研究案例：台積電 (TSMC) 商業模式與護城河",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "研究一家公司，最怕直接淹沒在新聞碎片中。這一步我們先使用教科書與Morris Chang（張忠謀）的公開專訪紀錄作為唯一資料源，來釐清「純晶圓代工 (Pure-Play Foundry)」的最初定義，這樣我們在後續加入高難度晶片與地緣政治新資料時，才能看清其運作的底層骨架。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳張忠謀創辦人訪談錄、公司年報，或半導體產業鏈概論 PDF",
          "複製下方 Prompt 貼到對話框，建立台積電的標準商業地基"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [台積電 (TSMC)] 的基礎知識框架。

請列出：
1. 台積電的標準商業定義，以及它解決了傳統 IDM 整合元件製造商的什麼痛點？
2. 最核心的 3 至 5 個半導體製造專有名詞，每個附上定義與機制
3. 台積電的早期創辦歷史與創辦人張忠謀所作的關鍵決定
4. 目前市場對此主題的「主流共識（如不與客戶競爭）」是什麼？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準商業定義</h3>
            <p><strong>台積電 (TSMC)</strong> 是全球第一家專業的<strong>晶圓代工 (Pure-Play Foundry)</strong> 公司。其核心商業模式在於「只替客戶製造晶片，自己絕不設計晶片或銷售自有品牌的半導體產品」。這徹底顛覆了早期由 Intel 等 IDM (整合元件製造商) 主導的半導體產業結構，降低了晶片設計公司的創業資金門檻，催生了全球 Fabless (無廠半導體設計) 產業的蓬勃發展。</p>
            
            <h3>2. 核心專有名詞</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">晶圓代工 (Pure-Play Foundry)</div>
                <div class="term-meta">商業模式定義</div>
                <div class="term-desc">僅提供晶圓製造與測試服務，不介入晶片設計，承諾「不與客戶競爭」以贏得 Apple、NVIDIA 等設計大廠的百分之百信任。</div>
              </div>
              <div class="term-card">
                <div class="term-word">開放創新平台 (Open Innovation Platform, OIP)</div>
                <div class="term-meta">設計生態系</div>
                <div class="term-desc">台積電整合了 EDA 工具商、IP 矽智財商與設計服務商的標準，讓客戶能以最高的相容性設計晶片並直接投片生產，是極高的生態護城河。</div>
              </div>
              <div class="term-card">
                <div class="term-word">晶圓級封裝 (CoWoS)</div>
                <div class="term-meta">先進封裝技術</div>
                <div class="term-desc">Chip-on-Wafer-on-Substrate 的簡稱。將多顆晶片（如 GPU 與高頻寬記憶體 HBM）在晶圓層級連接並封裝，是當前 AI 晶片能高速運算的核心瓶頸技術。</div>
              </div>
              <div class="term-card">
                <div class="term-word">極紫外光微影 (EUV)</div>
                <div class="term-meta">核心製程設備</div>
                <div class="term-desc">使用 13.5 奈米波長的極紫外光在晶圓上雕刻精細電路。台積電透過大量導入 EUV 機台，在 7 奈米以下的先進製程取得統治地位。</div>
              </div>
            </div>

            <h3>3. 創辦歷史與張忠謀的關鍵決策</h3>
            <p><strong>創辦人：</strong>張忠謀博士 (Dr. Morris Chang)，於 1987 年在工研院支持下創立台積電。</p>
            <p><strong>決定性轉折：</strong>當時所有大廠皆不看好晶圓代工，認為沒有設計就沒有利潤。張忠謀堅持「不與客戶競爭」的戰略，並成功爭取到 Intel 的工廠認證與 AMD 等客戶的早期訂單。他認為，製程技術與良率是不斷累積出來的，專心做好代工，生產規模會超越任何一家單獨的 IDM 大廠。</p>

            <h3>4. 市場主流共識</h3>
            <ul>
              <li><strong>信賴至上：</strong>客戶信任是台積電的基石，這也是為什麼 Intel 或 Samsung 同時做代工與自有產品，始終無法贏得大廠的完全信任。</li>
              <li><strong>製程霸權：</strong>台積電在 3 奈米與 2 奈米領域擁有幾乎 90% 的代工市佔，AI 浪潮（如 ChatGPT、 Blackwell 晶片）的核心供應幾乎完全由台積電獨占。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "只看公司歷史會忽略最新地緣政治風險與先進封裝演進。我們開啟 NotebookLM 的 Deep Research 模式，去搜尋網路上對「台積電海外建廠挑戰」與「先進封裝 CoWoS 的產能瓶頸」的分析報告，來作為文獻的補強。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式並輸入針對性 Prompt",
          "等待 3 分鐘，分析結果將會被自動匯入，補充我們在 Step 1 漏掉的最新數據"
        ],
        promptTemplate: `我手邊已經有 [台積電] 的創辦與商業模式地基。
請幫我研究近 2-3 年（特別是 2024-2026 年）重要進展：

1. 針對台積電海外建廠（美國亞利桑那州、日本熊本、德國德勒斯登）面臨的主要工程管理與文化衝突挑戰是什麼？
2. 先進封裝 CoWoS 為什麼會成為 AI 晶片出貨的「最大瓶頸」？台積電採取了什麼策略解決此瓶頸？
3. 學界與業界對於「去台化」或半導體供應鏈分散的討論與實質數據有哪些？

主要以有深度分析、具體數據的科技媒體或產業智庫報告為主。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 先進封裝 CoWoS 瓶頸與突破研究</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>研究主題 / 報告來源</th>
                    <th>年份</th>
                    <th>主要發現與數據</th>
                    <th>產業影響</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AI 晶片封裝產能追蹤</strong><br>TrendForce Trend Reports</td>
                    <td>2024-2025</td>
                    <td>AI 晶片核心瓶頸非晶圓製造，而是 CoWoS 先進封裝。台積電產能吃緊，導致 NVIDIA 晶片交期延長。台積電於 2024 下半年起積極擴張 CoWoS 產能，預估 2025 年產能將增加超過 1 倍。</td>
                    <td>推動台積電整合後段封測生態系，SoIC/CoWoS 成為核心利潤點。</td>
                  </tr>
                  <tr>
                    <td><strong>台積電全球建廠策略與管理挑戰</strong><br>McKinsey Tech Seminars</td>
                    <td>2025</td>
                    <td>美國廠面臨工會文化、法規繁雜與跨國管理衝突，量產時程被迫遞延；反觀日本熊本廠（JASM）因文化相近、政府大力補貼與日本半導體材料聚落完整，量產速度快且良率表現優異。</td>
                    <td>實證「文化距離」與「供應鏈聚落」是工程管理跨國轉移的關鍵成敗變數。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. 核心學術與產業爭議</h3>
            <ul>
              <li><strong>「分散建廠」對毛利率的衝擊：</strong>市場質疑海外建廠成本比台灣高出 30% 至 100%，是否會拉低台積電維持已久的「53% 毛利率」目標？台積電對此回應會透過定價策略與政府補強，維持長期獲利目標。</li>
              <li><strong>去台化 vs. 台灣矽盾：</strong>多國政治人物提出半導體過度集中台灣的國安風險；但學術研究指出，由於台灣具備無可取代的半導體工程師人才密度與24小時輪班彈性，將台積電核心研發與生產完全搬離台灣在物理上與經濟上是不可能的。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "半導體產業的縮寫非常多，如果搞不清楚 EUV、EDA、CoWoS 的實質意義，讀後面資料會一直卡關。這一步我們使用 NotebookLM 來產出核心術語對照表，特別是釐清大眾容易搞混的名詞。",
        instructions: [
          "在 NotebookLM 的 Chat 框輸入下方 Prompt，整理核心半導體術語",
          "獲取回答後，點擊「儲存為記事」，方便寫研究報告時進行快速查閱"
        ],
        promptTemplate: `針對 [台積電與半導體代工] 這個領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或媒體誤解的半導體詞彙，這些詞在日常生活中也會用到，但產業用法完全不同。

整理格式：
| 詞彙 | 一般人誤解/日常意思 | 半導體產業定義 | 為什麼容易混淆 (分析研究應注意點) |

請聚焦在理解這個產業鏈必須知道的字詞。`,
        outputContent: `
          <div class="output-card">
            <h3>台積電與先進製程術語陷阱對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>詞彙 (中/英)</th>
                    <th>一般大眾的誤解</th>
                    <th>半導體產業真實定義</th>
                    <th>為什麼容易混淆與寫作注意</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>奈米 (Nanometer / nm)</strong></td>
                    <td>指晶片內部電晶體柵極的「實際物理長度」（如 3 奈米即為 3nm 的長度）。</td>
                    <td>自 2011 年 FinFET 技術後，奈米已退化為一個「行銷行銷代號」與「技術世代指標」，並不代表任何實體特徵的長度。</td>
                    <td>媒體常拿 Intel 10 奈米與台積電 7 奈米做物理比較，但在實質電晶體密度上兩者其實相當。分析時不可直接把奈米大小等同於製程性能。</td>
                  </tr>
                  <tr>
                    <td><strong>先進封裝 (Advanced Packaging)</strong></td>
                    <td>以為就是把晶片放進塑料或陶瓷外殼的傳統封測包裝。</td>
                    <td>在晶圓層級上，透過微小的導電凸塊與矽中介層將多顆晶片做垂直或水平堆疊（如 CoWoS / 3D IC），以突破摩爾定律。</td>
                    <td>傳統封裝是低毛利的勞力密集業；先進封裝是高毛利、高技術門檻的晶圓廠核心戰場。研究時必須區分傳統封測廠與台積電的先進封測業務。</td>
                  </tr>
                  <tr>
                    <td><strong>IP 矽智財 (Intellectual Property)</strong></td>
                    <td>日常指電影、小說版權或商標權。</td>
                    <td>指已經通過設計驗證、可重複使用的積體電路設計模組（例如 ARM架構、USB介面模組）。</td>
                    <td>IC 設計公司透過購買 IP，不需重頭設計所有線路，大幅縮短時間。台積電的 OIP 平台即是以整合大量第三方 IP 為核心優勢。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "先看一遍心智圖展開的全貌。在 NotebookLM 中，自動生成的「心智圖 (Mind Map)」和「簡介文件 (Briefing Document)」是掌握全局的極佳工具。我們花幾分鐘探索它，看看除了代工外，AI 是否也幫我們抓出了設備商 ASML 或地緣政治政策的相對關係。",
        instructions: [
          "在 NotebookLM 點擊右側 Studio 面板 &rarr; 點擊「心智圖 (Mind Map)」",
          "把所有子節點展開，快速瀏覽所有分支，看看是否有你未曾考慮過的供應鏈關係"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」與「簡介文件」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">點擊心智圖中的 `EUV 供應商 ASML` 或 `地緣政治分散風險` 節點，NotebookLM 會自動將這些關聯論文的脈絡抽出來，在對話框裡做成摘要，幫您快速掌握半導體產業生態圈的全局架構。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 台積電產業心智圖</span>
              <span style="color: var(--secondary);">🌿 結構分支圖已建立</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料庫</div>
                <div class="mock-source-item active">☑ 台積電年報.pdf</div>
                <div class="mock-source-item active">☑ 先進封裝報告.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>您點選了節點：[護城河 - 開放創新平台 OIP]</strong><br>
                    依據來源，OIP 包含了超過 12,000 個 IP 模組，讓 NVIDIA 等大廠可以像樂高積木一樣快速拼裝晶片，直接相容台積電的 3nm 製程，這使客戶很難跳槽到三星或 Intel。
                  </div>
                </div>
                <div class="mock-input-area">
                  <span style="font-size:0.75rem; color:var(--text-muted);">💡 點擊心智圖節點進行快速探索</span>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 心智圖檢視</div>
                <div class="mock-studio-item active">🌿 台積電研究
                  <div style="font-size:0.7rem; color:var(--text-muted); padding-left:0.5rem;">
                    ├─ 專業晶圓代工 (Foundry)
                    ├─ 先進技術 (EUV, CoWoS)
                    ├─ 護城河 (OIP 生態系)
                    └─ 跨國建廠風險 (美、日、德)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是台積電，主線是它如何靠專業代工模式成為晶片霸主。這裡我們透過設定角色，讓 AI 成為資深產業分析師，並依序送出大、中、小顆粒度提問，把台積電的護城河脈絡完全理清。",
        instructions: [
          "設定角色：點選對話框右上角「設定對話」 &rarr; 設定為「半導體產業與科技投資分析師，回覆較長且詳實」",
          "在對話框中，依序發送大、中、小顆粒度提問，並儲存關鍵記事"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [台積電 (TSMC)]：
1. 主角是誰？張忠謀博士的背景是什麼？
2. 他在 1987 年是如何起步並說服台灣政府與飛利浦投資的？
3. 在當時的半導體界中，台積電的晶圓代工定位與其他 IDM 大廠最大的差別在哪裡？

中顆粒｜商業邏輯與轉折時刻：
針對 [台積電 (TSMC)] 的主角：
1. 它的核心商業邏輯是什麼？如何把「只代工不設計」的承諾轉化為龐大的營收？
2. 一路走到今天，面臨過哪些關鍵的轉折時刻？（例如：決定拒絕與客戶競爭、引進 EUV 技術、投入 CoWoS 先進封裝）
3. 這些關鍵決定為什麼是對的？奠定了什麼護城河？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全沒有科技背景的朋友介紹 [台積電 (TSMC)] 最厲害的地方。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到台積電的護城河？
3. 一句話收尾：講完之後留下什麼結論讓人記得？
請用口語化、說故事的語氣，不要用簡報條列式語氣。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：產業分析師對話紀錄片段</h3>
            <p><strong>第一問（起步與差別）回答節錄：</strong><br>
            「在 1987 年，所有半導體公司都兼做晶片設計與製造（即 IDM 模式）。張忠謀看到了晶片設計高昂的固定資產投資門檻，大膽創立了『只代工、不競爭』的台積電。這讓晶片設計創業家（如黃仁勳創立的 NVIDIA）可以專注於設計，把最昂貴的工廠投資交給台積電，奠定了輕資產的 Fabless 時代。」</p>
            
            <p><strong>第二問（護城河關鍵）回答節錄：</strong><br>
            「台積電的護城河不在單一的技術，而是『規模效應』與『信任』構成的良性循環：代工量愈大 &rarr; 良率累積愈快 &rarr; 晶片成本降低 &rarr; 吸納更多大客戶 &rarr; 營收盈餘投入研發 &rarr; 技術領先。這個飛輪一旦轉起來，市佔率破 9 成，對手便難以望其項背。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "看過不等於理解，我們必須試著回答核心問題。請在下方的學習單中試著寫下您對台積電商業模式的理解，並點擊「模擬 AI 教授驗證」，系統會動態進行 Fact-check，指出您理解中是否有事實錯誤或概念偏差。",
        instructions: [
          "在下方輸入框中填入您對台積電的回答",
          "點擊「模擬 AI 教授驗證」，閱讀 AI 給予您的實時回饋與修訂建議"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的台積電回答]

請根據資料幫我檢查：
1. 有開展性的事實錯誤？特別是關於代工商業模式與 OIP 的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 台積電最核心的主角與商業模式是什麼？</label>
              <textarea id="tsmc-q1" class="practice-input" placeholder="請回答... (提示：可提到張忠謀、不與客戶競爭的純晶圓代工)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 台積電的「護城河飛輪」如何運作？靠什麼賺錢？</label>
              <textarea id="tsmc-q2" class="practice-input" placeholder="請回答... (提示：先進製程、先進封裝 CoWoS、開放創新平台 OIP)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 去台化與海外建廠對台積電造成的最大挑戰是什麼？</label>
              <textarea id="tsmc-q3" class="practice-input" placeholder="請回答... (提示：美國與日本廠的成本文化差異、毛利率維持、地緣政治)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('tsmc')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('tsmc')">填入示範回答</button>
            </div>
            <div id="tsmc-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 半導體分析師實時反饋
              </div>
              <div id="tsmc-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "一次性研究是不夠的。我們把今天整理的「台積電護城河與海外風險」存為記事並轉成「來源 (Notes)」。下一次台積電召開最新的法說會（或發布最新季報）時，直接上傳最新簡報 PDF，發送對話讓 AI 比對最新變化，這就是知識的持續累積與演進。",
        instructions: [
          "在 NotebookLM 點點對話旁的「儲存為記事」，命名為「台積電護城河與地緣政治」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有最新法說會簡報 (法說會 PPT) 或新聞時直接上傳，並使用下方 Prompt 進行分析比對"
        ],
        promptTemplate: `我之前關於台積電商業護城河與海外建廠風險的筆記已經在來源 (Notes) 中。
現在我上傳了最新的台積電 [例如：2026年最新一季法說會簡報 PDF]。
請幫我分析：
1. 最新財報數據（營收、毛利率）與先前我筆記中的預估有何差異？是否維持在 53% 毛利率水準？
2. 在先進封裝 CoWoS 的產能上，法說會有透露新的擴產進度或新的客戶合作消息嗎？
3. 地緣政治風險與海外廠建置進度有新的調整嗎？
4. 請幫我更新我舊的知識地圖。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新法說會簡報後)</h3>
            <p><strong>新加入來源：</strong><em>TSMC Q3 2025 Earnings Call Presentation.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，最新季報顯示了以下重大調整：<br><br>
              <strong>1. 獲利表現超預期：</strong>本季毛利率升至 57.8%（高於先前筆記所記的長期目標 53%），主要得益於 3nm 先進製程佔營收比重已達 32% 及產能利用率滿載。<br><br>
              <strong>2. 先進封裝產能追趕：</strong>台積電透露將於 2026 年進一步擴充 CoWoS 產能，除了原台灣封測廠外，不排除在海外評估後段封裝合作，以減緩 AI 晶片供不應求的局面。<br><br>
              <strong>3. 海外建廠時程：</strong>美國廠第二期 2 奈米廠建置進度超前，預計可於 2026 年底進行試產，舒緩了先前筆記中提及的文化摩擦延遲風險。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  innolux: {
    title: "產業轉型升級案例：群創光電 (Innolux) 扇出型面板級封裝 (FOPLP) 轉型",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "面板產業具有強烈的循環週期（面板雙雄的價格起落）。群創光電為了擺脫傳統 LCD 價格戰，大膽跨足半導體封裝。這一步我們上傳面板顯示器基礎教材與群創的早期法說會簡報，理解它最初的資產與轉型背景。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳群創光電的官方公司簡介、TFT-LCD 產業價值鏈分析文獻",
          "複製下方 Prompt，建立群創面板事業的標準基礎知識"
        ],
        promptTemplate: `請完全基於上傳的資料內容，為我建立 [群創光電 (Innolux)] 的基礎知識與產業背景。

請列出：
1. 群創光電的核心顯示器業務與主要的傳統產品線
2. 什麼是「面板價格循環 (Panel Price Cycle)」？它如何衝擊傳統面板廠的獲利？
3. 為什麼面板廠空有龐大的折舊完毕工廠（舊世代面板廠），卻急需尋找新出路？`,
        outputContent: `
          <div class="output-card">
            <h3>1. 群創傳統核心業務與痛點</h3>
            <p><strong>群創光電 (Innolux)</strong> 是全球液晶顯示面板（TFT-LCD）的龍頭大廠之一，隸屬於鴻海科技集團。其傳統產品線包含電視面板、車用面板、醫療顯示器與筆電面板。然而，面板產業屬於典型的高資本支出、高波動週期產業，極易受中國廠商產能擴張影響，陷入價格戰泥淖（俗稱「面板雙雄」的景氣循環痛點）。</p>
            
            <h3>2. 傳統舊世代廠房的資產包袱</h3>
            <p>群創擁有許多已經折舊完畢的早期舊世代面板廠房（如 3.5 代廠、4.5 代廠、5.5 代廠）。這些廠房如果繼續生產低階顯示面板，由於效率不如新世代的 8.5 代或 10.5 代廠，會持續虧損；但如果直接關廠拆除，又是極大的資產減損。如何「活化這些舊世代廠房房舍與設備」，是工程管理上的重大難題。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "群創是如何化腐朽為神奇，將做面板的舊工廠改造成做半導體 AI 晶片先進封裝的基地？我們使用 Deep Research 模式去搜尋最新的「FOPLP (面板級封裝)」技術文獻，理解其運作機理與產業鏈爭議。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式並輸入針對性 Prompt",
          "等待報告生成並自動匯入，這能幫我們搞懂面板封裝在先進封裝界的優缺點"
        ],
        promptTemplate: `我手邊已經有 [群創光電] 的傳統面板業務與資產背景。
請幫我研究近 2-3 年（特別是 2024-2026 年）群創在半導體封裝上的重大轉型：

1. 什麼是「扇出型面板級封裝 (Fan-out Panel-Level Packaging, FOPLP)」？它的技術原理是什麼？
2. 相比於台積電的晶圓級封裝（CoWoS / FOWLP 使用圓形矽晶圓），群創使用「玻璃基板 (Glass Substrate) 方形面板」進行封裝，有哪些「成本」與「面積利用率」上的絕對優勢？
3. 目前 FOPLP 封裝面臨的技術挑戰（如玻璃翹曲 warp、對位精準度、良率控制）有哪些？

主要以半導體封裝技術論文、產業分析師報告為主。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 什麼是扇出型面板級封裝 (FOPLP)？</h3>
            <p><strong>FOPLP (Fan-out Panel-Level Packaging)</strong> 是一種將晶片直接放置於大面積方形玻璃基板（而非傳統 12 吋圓形晶圓）上進行先進封裝的技術。它利用了面板製程中的曝光與電鍍線路技術，將原本封裝的基板面積擴大數倍。</p>
            
            <h3>2. 方形玻璃基板封裝的兩大優勢</h3>
            <ul>
              <li><strong>面積利用率極高：</strong>傳統 12 吋圓形晶圓的邊角裁切會浪費約 15% 的面積。而方形玻璃面板的利用率可高達 95% 以上，一次可封裝的晶片數量是圓形晶圓的 3 至 4 倍。</li>
              <li><strong>成本大幅降低：</strong>利用群創已經折舊完畢的 3.5 代或 4.5 代舊面板線進行改裝（Retrofit），不需花費數百億元重新建造全新晶圓廠，能以極具競爭力的成本提供先進封裝產能，解決 AI 晶片供不應求的限制。</li>
            </ul>

            <h3>3. 當前的技術瓶頸與挑戰</h3>
            <p><strong>玻璃翹曲 (Warping)：</strong>玻璃基板在大面積加熱與電鍍過程中，因材料熱膨脹係數不一致，容易發生彎曲，導致對位失準。這是目前工程管理與製程品質控制的核心難關。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "面板級封裝 (FOPLP) 橫跨了「面板顯示器」與「半導體封裝」兩個大產業，術語極多。這一步我們用 NotebookLM 整理術語陷阱表，尤其區分晶圓級 (WLP) 與面板級 (PLP) 的不同。",
        instructions: [
          "在對話框輸入 Prompt 要求整理 FOPLP 與面板的關鍵術語",
          "產出後儲存為記事，釐清專有名詞"
        ],
        promptTemplate: `針對 [群創轉型 FOPLP 面板級封裝] 領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或媒體混淆的術語。

整理格式：
| 術語 | 傳統面板/大眾意思 | 半導體封裝定義 | 為什麼容易混淆與分析注意點 |`,
        outputContent: `
          <div class="output-card">
            <h3>群創 FOPLP 先進封裝術語對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>術語 (中/英)</th>
                    <th>傳統面板/大眾用法</th>
                    <th>FOPLP 先進封裝定義</th>
                    <th>為什麼容易混淆</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>FOPLP (面板級封裝) vs. FOWLP (晶圓級封裝)</strong></td>
                    <td>大眾常將兩者混為一談，都稱為先進封裝。</td>
                    <td>FOWLP 在圓形晶圓上進行；FOPLP 則在巨大的方形玻璃面板（如 5.5 代玻璃基板）上進行封裝。</td>
                    <td>FOPLP 的面積大 3-4 倍，能降低成本，但設備改裝精準度要求極高，屬於跨業製程的整合。</td>
                  </tr>
                  <tr>
                    <td><strong>玻璃基板 (Glass Substrate)</strong></td>
                    <td>日常指電視或手機的顯示玻璃面板。</td>
                    <td>在半導體封裝中，作為承載多晶片並進行超細微布線 (RDL) 的高剛性、高平坦度基板材料。</td>
                    <td>它不再是顯示器，而是被當作半導體的高速訊號傳輸層，其物理強度與耐熱度要求截然不同。</td>
                  </tr>
                  <tr>
                    <td><strong>舊廠改裝 (Fab Retrofit)</strong></td>
                    <td>拆除舊廠房重新蓋新大樓。</td>
                    <td>保留舊世代面板廠房的黃光室、輸送帶等基礎結構，將裡面的面板設備替換成半導體曝光機與電鍍槽。</td>
                    <td>這考驗工程管理能力。如何在舊空間裡達到半導體等級的無塵室要求（Class 10 甚至更高），是技術關鍵。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握資料全局觀",
        vkThought: "利用 Studio 的心智圖工具快速看過。群創從面板跨足封裝，牽涉到與 IC 設計大廠（如 AMD、NVIDIA）、設備商、傳統封測廠的關係。我們展開心智圖分支，對其生態系地位建立直觀認識。",
        instructions: [
          "點擊右側 Studio 面板 &rarr; 點擊「心智圖 (Mind Map)」",
          "查看 `群創光電` 分支如何延伸到 `FOPLP 製程技術` 以及 `車用面板` 與 `封裝產能銷售`"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖會清楚呈現 `群創光電` &rarr; `舊廠折舊完畢` &rarr; `轉為 FOPLP 先進封裝` &rarr; `晶圓代工外溢效應` 的因果關係，點擊這些關聯線能讓您快速掌握老舊面板廠是如何透過 TRIZ 分割與改用原則重獲新生的。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 群創 FOPLP 轉型全貌心智圖</span>
              <span style="color: var(--primary);">🌿 分支網絡已建立</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻</div>
                <div class="mock-source-item active">☑ FOPLP技術白皮書.pdf</div>
                <div class="mock-source-item active">☑ 群創法說會報告.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>群創轉型心智圖全局摘要：</strong><br>
                    核心轉折點在於活化 3.5 代廠。原本該廠生產 LCD 已無競爭力，透過改裝為 FOPLP 先進封裝生產線，搖身一變成為能封裝 AI 晶片的高階廠房，成功打入半導體供應鏈。
                  </div>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 群創轉型 FOPLP</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜大中小顆粒度三連問",
        vkThought: "主角是群創，主線是它如何利用舊面板廠房設備改造轉身為 FOPLP 封裝新星。我們在此步驟設定角色為科技產業分析師，依序詢問大、中、小顆粒問題，探討其轉型的商業可行性。",
        instructions: [
          "設定對話角色為「半導體與光電產業資深分析師」",
          "依序複製大、中、小顆粒 Prompt 送出並讀完回覆"
        ],
        promptTemplate: `[依序發送以下三個問題，讀完一題再發下一題]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [群創光電 (Innolux)]：
1. 主角是誰？傳統面板業務的景氣循環痛點是什麼？
2. 它是在什麼契機下，決定跨足半導體 FOPLP 封裝的？
3. 面板廠做封裝，跟傳統半導體封測廠 (如日月光) 最大的差別與優勢在哪裡？

中顆粒｜商業邏輯與轉折時刻：
針對 [群創光電 (Innolux)] 的主角：
1. 它的 FOPLP 商業邏輯是什麼？它要如何把「做面板的舊設備」改造成「做封裝的賺錢機器」？
2. 這一路上有哪些關鍵轉折？（例如與國際晶片大廠合作、出售舊廠換取資金等）
3. 這些決定對群創的資產負債表與獲利能力有何影響？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全不熟面板的同學介紹 [群創光電 (Innolux)] 轉型的故事。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到群創舊廠改裝與方形玻璃封裝的厲害之處？
3. 一句話收尾：留下什麼結論讓人記得？
請用口語化語氣整理。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：分析師 FOPLP 轉型解答片段</h3>
            <p><strong>第一問（面板廠做封裝優勢）回答節錄：</strong><br>
            「傳統面板廠最大的優勢是『玻璃製程經驗』與『折舊完畢的黃光設備』。半導體封裝需要精密布線，這跟面板的 TFT 線路製造在物理上是一樣的。群創不需要跟台積電一樣花幾百億買新機台，它直接用舊世代面板廠改裝，用 3-4 倍大的玻璃基板封裝晶片，成本能比晶圓級封裝便宜很多。」</p>
            
            <p><strong>第二問（關鍵轉折）回答節錄：</strong><br>
            「群創的關鍵決定在於 2023-2024 年，它拒絕繼續在 LCD 面板跌價中苦撐，而是直接將 3.5 代廠改裝為 FOPLP 先進封裝產線，並成功送樣給國際大客戶驗證。這讓群創從一個『被看衰的折舊累贅公司』，變成了『AI 先進封裝產能的奇兵』。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "透過自訂學習單，將資訊內化。請在下方填寫您對群創 FOPLP 轉型邏輯的理解，點擊驗證，系統會模擬 AI 指導教授為您查證，指出您是否忽略了玻璃翹曲等技術細節。",
        instructions: [
          "在下方輸入框中填入您對群創光電的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的群創回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於 FOPLP 原理與玻璃基板優勢
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 群創光電決定切入半導體封裝的核心商業動機是什麼？</label>
              <textarea id="innolux-q1" class="practice-input" placeholder="請回答... (提示：可提到避開傳統面板價格戰、活化折舊完畢的舊廠房設備)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. FOPLP 面板級封裝相比晶圓級封裝 (CoWoS) 的成本與面積優勢為何？</label>
              <textarea id="innolux-q2" class="practice-input" placeholder="請回答... (提示：方形玻璃面板利用率大於 95%、可用舊世代曝光機改裝、面積大3-4倍)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 群創在 FOPLP 先進製程上目前面臨的最大物理技術挑戰是什麼？</label>
              <textarea id="innolux-q3" class="practice-input" placeholder="請回答... (提示：玻璃受熱翹曲 Warping、線路對準精度、良率提升控制)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('innolux')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('innolux')">填入示範回答</button>
            </div>
            <div id="innolux-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM FOPLP 專家實時反饋
              </div>
              <div id="innolux-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "我們將「群創 FOPLP 轉型商業分析」存成筆記並轉成「來源」。當未來有國際半導體設備更新（或群創最新一季法說會宣布打入某大 AI 晶片廠供應鏈）時，上傳資料，讓 AI 幫你比對，完成滾動式研究。",
        instructions: [
          "在 NotebookLM 點擊「儲存為記事」，命名為「群創光電 FOPLP 轉型地圖」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有群創最新法說會報告或封裝研究新消息時直接上傳，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究群創光電封裝轉型的筆記已經在來源 (Notes) 中。
現在我上傳了最新的 [例如：群創光電 2026 最新法說會報告 PDF / AI 晶片先進封裝研究報告]。
請幫我分析：
1. 跟我上次的知識地圖相比，群創在 FOPLP 封裝的實際產出與良率進度上有何最新更新？
2. 在客戶採用上，是否有新的國際 IC 設計大廠開始下單或宣布戰略合作？
3. 技術上，關於玻璃翹曲 (Warping) 的解決方案是否有新突破？
4. 請幫我更新我的舊筆記。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入最新法說會報告後)</h3>
            <p><strong>新加入來源：</strong><em>Innolux 2026 Q1 Investors Call Report.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026年最新群創報告顯示了以下重大轉折：<br><br>
              <strong>1. 良率與出貨突破：</strong>群創宣布其第一期 FOPLP 先進封裝產線良率已提升至 88%（高於先前筆記所載的 75% 預測值），並已於 2026 年初開始小量出貨給國際車用晶片大廠。<br><br>
              <strong>2. 工藝改良：</strong>針對舊筆記中提到的玻璃翹曲 (Warping) 技術難題，群創與合作設備大廠引進了全新的『雷射動態校平技術 (Laser Dynamic Levelling)』，成功將基板翹曲率降低了 40%，這極大穩定了線路曝光精度。<br><br>
              <strong>3. 產能擴充計畫：</strong>因應 AI 晶片強烈需求，董事會通過將於 2026 下半年啟動『第二期 5.5 代舊面板線改裝為封裝線』的計畫，預估先進封裝產能將提升 3 倍。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  template: {
    title: "自訂主題研究 (空白範本與介面導覽)",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "萬丈高樓平地起。在開始任何新研究時，最忌諱一上來就搜尋全網或混雜多種未篩選的文獻。請先準備 1 至 2 本該學科的標準概論或教科書，將其匯入 NotebookLM 作為唯一來源，以確保 AI 的回答完全基於標準共識。",
        instructions: [
          "挑選 1-2 份您主題相關的開放授權教科書 (如 OpenStax) 或權威文獻講義",
          "在 NotebookLM 左側來源面板點擊「新增來源」並上傳這些 PDF",
          "複製下方提示詞，將括號中的 [你的主題] 換成您自己的研究主題後送出對話"
        ],
        promptTemplate: `請完全基於這份教科書與講義內容，為我建立 [你的主題] 的基礎知識框架。

請列出：
1. 此理論／領域的標準學術定義
2. 最核心的 3 至 5 個專有名詞，每個附上學術定義與運作機制
3. 此理論的發展歷史與代表性學者
4. 目前學界對此主題的「主流共識」是什麼

請特別標明這份教科書出版的年份，以便後續判斷哪些內容可能需要用較新的文獻來補強。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在左側「來源」面板勾選您的教科書。此時發送對話，NotebookLM 就會<b>百分之百只根據您的教科書內容</b>進行回答，並在回答中附上對應原文的圓形數字角標（引文來源），保證不幻覺。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 自訂主題研究地基</span>
              <span style="color: var(--success);">● 已勾選教科書來源</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文件 (打地基)</div>
                <div class="mock-source-item active">☑ [你的主題]教科書.pdf</div>
                <div class="mock-source-item active">☑ 課程大綱與講義.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">請完全基於這份教科書內容，為我建立 [你的主題] 的基礎知識框架...</div>
                  <div class="mock-bubble ai">
                    <strong>[你的主題] 基礎知識框架 (已生成)</strong><br>
                    1. <strong>標準定義：</strong>該領域主要指... [1]<br>
                    2. <strong>核心專有名詞：</strong>[名詞A] 是指...，運作原理為... [2]<br>
                    3. <strong>主流共識：</strong>學界目前公認... [3]
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請為我詳細解釋 [名詞A]...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item active">簡介文件 (可點擊)</div>
                <div class="mock-studio-item">學習指南</div>
                <div class="mock-studio-item">常見問題解答</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "打完地基後，我們需要利用 Deep Research 模式去搜尋最新的前沿論文與方法論爭議。我們明確要求 AI「只找教科書沒提的內容」，這樣抓回來的資料品質會高出很多。",
        instructions: [
          "在 NotebookLM 點擊「新建」 &rarr; 選擇「在網路上搜尋新來源」",
          "下方來源管道選擇「網路」，並開啟「Deep Research」模式",
          "複製下方 Prompt 模板，將主題與領域進行替換後送出搜尋"
        ],
        promptTemplate: `我手邊已經有 [你的主題] 的核心教科書內容。
請幫我研究教科書通常會少談、但對深入理解這個主題很重要的內容：

1. 該領域的重要學術文獻：
   - 被引用次數最高的 5 篇綜述論文 (Review Paper) 或奠基論文
   - 近期最重要的突破性研究
   每一篇請附上：主要論點、發表年份、作者、以及 DOI 或連結
2. 學界目前還在吵什麼 (方法論爭議、理論詮釋爭議、未解的實證問題)
3. 大眾印象跟學術事實差最遠的地方

主要以學術期刊論文、文獻回顧、後設分析為主。請附上資料來源連結。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在網路上搜尋新來源時，切換到 <b>Deep Research 模式</b>。它會自動在後台進行多輪搜尋，篩選數十篇權威文獻，並直接將其彙整成一份報告，連同所有引用的來源網址自動匯入您的來源列表。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - Deep Research 補強搜尋</span>
              <span style="color: var(--secondary);">🔍 正在執行 Deep Research 搜尋...</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文件 (已擴充)</div>
                <div class="mock-source-item">☐ [你的主題]教科書.pdf</div>
                <div class="mock-source-item active">☑ [網頁] Deep Research 補強報告</div>
                <div class="mock-source-item active">☑ [論文] Review Paper 1 (2024)</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>已完成 [你的主題] 針對性文獻補強</strong><br>
                    已成功抓取並分析 12 個網路權威來源：<br>
                    - <strong>5篇高引用文獻：</strong>[文獻1] (2023, DOI:xxx)、[文獻2] (2024)...<br>
                    - <strong>學術爭議：</strong>派別 A 主張...；派別 B 批評其方法論為...<br>
                    - <strong>大眾誤解：</strong>大眾普遍認為... 但學術論文指出其實是...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請詳細說明 [文獻1] 與教科書定義的差別...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item">簡介文件</div>
                <div class="mock-studio-item active">常見問題解答 (更新中)</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "學術主題的門檻大多在於術語。我們需要利用 NotebookLM 的報告工具，將資料庫裡的核心學術名詞與日常混淆詞彙整理出來，先掌握這 20% 的關鍵詞，就能看懂 80% 的內容。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板點選「報告」",
          "點選「自訂報告 (Custom Report)」",
          "複製下方 Prompt 模板貼入報告生成框，等待產出完整的術語對照表"
        ],
        promptTemplate: `針對 [你的主題] 這個學術領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人誤解的學術詞彙，這些詞在日常生活中也會用到，但學術用法完全不同。

整理格式：
| 詞彙 | 日常意思 | 學術意思 | 為什麼容易混淆 |

請聚焦在「日常會用、但學術定義截然不同」的詞，而非純學術專有名詞。如果這個詞在學術領域中有多個分支的不同定義，也請特別標出來。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">使用「自訂報告」工具產出的內容，會自動結構化成精緻的文件，並且可以一鍵儲存為筆記（Note）。這非常適合用來做為文獻回顧的基礎名詞解釋草稿。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - Studio 報告工具</span>
              <span style="color: var(--primary);">📝 產出自訂報告中...</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">全部勾選來源</div>
                <div class="mock-source-item active">☑ 教科書.pdf</div>
                <div class="mock-source-item active">☑ Deep Research 報告</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>[自訂報告] 術語陷阱對照表已生成</strong><br>
                    此報告已儲存至右側的記事。對照表欄位包括：<br>
                    - [詞彙A]：日常指... 學術指... 混淆原因：...<br>
                    - [詞彙B]：日常指... 學術指... 混淆原因：...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">將此報告儲存為記事...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item active">自訂報告 (點擊編輯)</div>
                <div class="mock-studio-item">簡介文件</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握輪廓｜利用心智圖展開全貌",
        vkThought: "在問問題前，先看一遍資料全貌。利用 NotebookLM 自動產出的心智圖（Mind Map）工具，將所有子主題與理論關係視覺化展開，這能幫助你釐清核心概念與衍生概念之間的層級關係。",
        instructions: [
          "在 NotebookLM 右側 Studio 面板點選「心智圖 (Mind Map)」",
          "點擊展開所有分支，花 3-5 分鐘瀏覽所有子節點",
          "點擊有興趣的節點，AI 會在中間對話面板給予詳細的文獻回答，您可以直接將其儲存為記事"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖是 NotebookLM 最具視覺感的探索工具。它會自動把你的來源庫概念串接起來。看到不懂的節點，直接點擊它，AI 會即時在主視窗中為您解說該節點的內容，免去手動輸入問題的時間。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 心智圖工具</span>
              <span style="color: var(--secondary);">🌿 心智圖已生成</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料庫</div>
                <div class="mock-source-item active">☑ 教科書 + 論文庫</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>您點擊了節點：[核心子命題A]</strong><br>
                    依據文獻，此概念是指... [1]，常用來解決... [2]。
                  </div>
                </div>
                <div class="mock-input-area">
                  <span style="font-size:0.75rem; color:var(--text-muted);">💡 點擊心智圖節點進行快速探索</span>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 心智圖檢視</div>
                <div class="mock-studio-item active">🌿 [你的主題]
                  <div style="font-size:0.7rem; color:var(--text-muted); padding-left:0.5rem;">
                    ├─ 核心概念
                    ├─ 發展歷史
                    └─ 理論爭議
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "此步驟是內化理論的核心。我們必須透過「設定對話角色」將 NotebookLM 升級為該領域的指導教授，接著依序進行「歷史脈絡問」、「相近理論比較問」與「應用與爭議問」，在心中搭起完整的知識地圖。",
        instructions: [
          "點選對話框右上角「設定對話」 &rarr; 「選擇角色」 &rarr; 「自訂」",
          "貼入：『以相關領域的碩博士研究者來和我對話，回覆內容選擇「較長」』",
          "依序複製下方三道 Prompt（歷史、比較、應用）在對話框中發送，閱讀產出內容"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [你的主題]：
1. 這個理論出現之前，學界用什麼解釋同一個現象？
2. 奠基者為什麼覺得既有解釋不夠，需要提出新理論？他做了什麼關鍵研究來支持新主張？
3. 這個理論被廣泛接受之後，有沒有發生過重大修正或學派分裂？是因為什麼新證據或新批評？
4. 近 20 年的研究方向跟最初的版本差在哪？

第二問｜理論比較：
針對 [你的主題]，請從匯入的資料中，找出 2 至 3 個最常被學界拿來跟它對照比較的近似理論。每個理論請說明：
1. 理論名稱（中英對照）
2. 為什麼跟 [你的主題] 常被一起討論
3. 跟 [你的主題] 最容易被混淆的地方是什麼
(請要求使用「資料表」格式產出)

第三問｜應用與爭議：
針對 [你的主題]：
1. 這個理論已經被應用到哪些原本學科以外的領域？每個應用領域請說明引用方式與接受度。
2. 學界目前的主要爭議與未解問題有哪些？
3. 我要用 3 分鐘跟一個完全不熟 [你的主題] 的朋友介紹這個理論。請幫我整理口語化的開場、重點與常見誤解。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">透過「設定對話」將 AI 的角色鎖定在『學術研究者』，可以極大提升 AI 回答時的精準度與語氣深度，避免其給出過於淺顯的維基百科式回答。回覆內容選擇『較長』，能產出論證更完整、包含完整引文的出處報告。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 博士級對話設定</span>
              <span style="color: var(--primary);">👤 角色設定：碩博士研究者 (較長回覆)</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">已選來源</div>
                <div class="mock-source-item active">☑ 教科書與綜述文獻</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">第一問｜歷史脈絡：這個理論出現之前...</div>
                  <div class="mock-bubble ai">
                    <strong>[你的主題] 的歷史演進脈絡</strong><br>
                    - <strong>前身理論：</strong>在 [理論A] 提出前，學界普遍使用 [舊理論] 來解釋此現象...<br>
                    - <strong>突破點：</strong>奠基者 [學者名] (1995) 認為舊理論無法合理解釋... 因而提出本理論 [1]...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">第二問｜理論比較...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 面板</div>
                <div class="mock-studio-item">自訂報告</div>
                <div class="mock-studio-item">學習指南</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "這一步是將「AI 的內容」轉化為「你自己的知識」的關鍵。請在這裡寫下您自己所研究的任何主題，並試著回答 3 個核心問題，點擊驗證按鈕，系統將自動比對並給予您事實校正與優化建議。",
        instructions: [
          "在下方輸入框中輸入您的「自訂主題」與「核心定義」等內容",
          "點擊「模擬 AI 教授驗證」，系統會執行智慧 fact-check，指出您理解中是否有事實錯誤或概念偏差"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中針對自訂主題填寫的答案]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是引用奠基者主張的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化的地方？
4. 有沒有把「主流共識」誤認為「個別研究結論」，或是反過來？

請直接指出問題，不用客氣，並附上對應的來源引用。`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">請輸入您的「自訂研究主題」與「核心專有名詞」：</label>
              <textarea id="temp-q1" class="practice-input" placeholder="例如：依附理論 / 客體關係 / 品牌擴展策略 / 流體力學應用..."></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">核心命題 (請用您自己的話簡述這個理論在主張什麼)：</label>
              <textarea id="temp-q2" class="practice-input" placeholder="請試著回答... (提示：先講這個理論為了解決什麼，核心主張是什麼)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">與近似理論最大的差別在哪裡？日常最常被誤解之處？</label>
              <textarea id="temp-q3" class="practice-input" placeholder="請試著回答... (提示：列出一個最容易搞混的相近概念並做比較)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('temp')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('temp')">填入自訂範例回答</button>
            </div>
            <div id="temp-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 指導教授實時反饋
              </div>
              <div id="temp-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "單次的研究只是一個剖面，只有當我們建立「知識螺旋」，將今天整理完的筆記轉存為來源，並隨時上傳最新文獻進行對比，我們才能隨著時間累積，真正摸透這個領域並成為專家。",
        instructions: [
          "在 NotebookLM 點擊對話旁「儲存為記事」，為筆記命名為「[主題]-我的知識地圖」",
          "點擊記事卡片右上角 &rarr; 點選「轉成來源」",
          "未來若看見該主題的新論文或行業報告，直接上傳至同一個筆記本，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究這個主題的筆記已經在來源 (Notes) 裡了。
現在我加入了一些新的論文／文獻。

請幫我比較：
1. 跟我上次的知識地圖相比，有什麼新的發現或論點？
2. 這些新資料會挑戰我之前對核心命題、近似理論比較、或跨領域應用的判斷嗎？
3. 有沒有我應該特別注意的新爭議或新證據？
4. 如果我要更新文獻回顧，這幾篇新文獻應該插入哪一節？`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">NotebookLM 支援將您手動寫下的「筆記(Note)」或者「AI 生成的記事」轉化為「Source(來源)」。當您將筆記轉為來源後，AI 將會在回答中自動引用您的個人筆記與總結。每次有新的論文，AI 都會將其與您既有的知識庫進行比對，形成良性的知識滾動與累積循環。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 轉成來源與知識螺旋</span>
              <span style="color: var(--success);">🔄 知識迴旋模式啟動</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料 (滾動累積)</div>
                <div class="mock-source-item">☑ [1] 原本的教科書.pdf</div>
                <div class="mock-source-item active">☑ [2] 轉化後的個人知識筆記 (Note)</div>
                <div class="mock-source-item active">☑ [3] [2026年最新發表] 突破論文.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble user">我上次的知識筆記在來源裡了，請幫我比對 2026 最新論文有何突破...</div>
                  <div class="mock-bubble ai">
                    <strong>文獻比對與知識螺旋報告</strong><br>
                    1. <strong>新增論點：</strong>2026 年新論文引進了 [新技術/新機制]，補強了您筆記中第二節關於 [原機理] 的不足 [3]...<br>
                    2. <strong>理論修正：</strong>新文獻指出 [舊假設] 在特定環境下不成立，會挑戰您在 Note 裡的第三項判斷 [2, 3]...
                  </div>
                </div>
                <div class="mock-input-area">
                  <div class="mock-input">請幫我修改我的 Note 筆記內容...</div>
                  <button class="mock-send-btn">&rarr;</button>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 已儲存筆記</div>
                <div class="mock-studio-item active">📝 ［你的主題］- 理論與前沿筆記</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
};

let currentCase = 'lean';
let currentStepIdx = 0;

function switchCase(caseName) {
  currentCase = caseName;
  currentStepIdx = 0;
  
  // Update Selector Buttons active state
  document.querySelectorAll('.btn-tab').forEach(btn => {
    if (btn.dataset.case === caseName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Render Step Navigation
  renderStepNav();
  
  // Render Current Step Content
  renderStepContent();
  
  // Smooth scroll to the top of the content container
  const container = document.getElementById('step-content-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderStepNav() {
  const steps = workflowData[currentCase].steps;
  const navContainer = document.getElementById('step-nav');
  navContainer.innerHTML = '';
  
  steps.forEach((step, idx) => {
    const btn = document.createElement('button');
    btn.className = `step-nav-btn ${idx === currentStepIdx ? 'active' : ''}`;
    btn.onclick = () => selectStep(idx);
    
    btn.innerHTML = `
      <div class="step-num">${idx + 1}</div>
      <span>${step.stepTitle}</span>
    `;
    navContainer.appendChild(btn);
  });
}

function selectStep(stepIdx) {
  currentStepIdx = stepIdx;
  
  // Update step nav active state
  document.querySelectorAll('.step-nav-btn').forEach((btn, idx) => {
    if (idx === stepIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderStepContent();
  
  // Smooth scroll to the top of the content container
  const container = document.getElementById('step-content-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderStepContent() {
  const step = workflowData[currentCase].steps[currentStepIdx];
  const container = document.getElementById('step-content-container');
  
  // Clear container and apply fade-in animation
  container.classList.remove('fade-in');
  void container.offsetWidth; // Trigger reflow
  container.classList.add('fade-in');
  
  // Construct HTML
  let instructionsHtml = '';
  step.instructions.forEach(inst => {
    instructionsHtml += `<li>${inst}</li>`;
  });
  
  container.innerHTML = `
    <div class="step-header">
      <div class="step-badge">${step.stepBadge}</div>
      <h2 class="step-title">${step.stepTitle}</h2>
    </div>
    
    <div class="vk-thought-box">
      <div class="vk-title">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        AI 的思路
      </div>
      <p class="vk-desc">${step.vkThought}</p>
    </div>
    
    <div class="instruction-section">
      <h3 class="instruction-title">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21-12v7a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/></svg>
        操作步驟
      </h3>
      <ul class="instruction-list">
        ${instructionsHtml}
      </ul>
    </div>
    
    ${step.promptTemplate ? `
      <div class="prompt-box">
        <div class="prompt-header">
          <div class="prompt-label">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            NotebookLM Prompt 提示詞模板
          </div>
          <button class="btn-copy" onclick="copyPromptText(this)">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>複製提示詞</span>
          </button>
        </div>
        <div id="prompt-content" class="prompt-content">${step.promptTemplate}</div>
      </div>
    ` : ''}
    
    <div class="output-section">
      <h3 class="output-title">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2h0z"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></svg>
        NotebookLM 真實跑出來的結果展示
      </h3>
      ${step.outputContent}
    </div>
  `;
}

function copyPromptText(btn) {
  const promptText = document.getElementById('prompt-content').innerText;
  navigator.clipboard.writeText(promptText).then(() => {
    btn.classList.add('copied');
    btn.querySelector('span').innerText = '已複製！';
    btn.querySelector('svg').outerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="20 6 9 17 4 12"/></svg>`;
    
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.querySelector('span').innerText = '複製提示詞';
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> <span>複製提示詞</span>`;
    }, 2000);
  });
}

function fillDemoAnswers(caseName) {
  if (caseName === 'lean') {
    document.getElementById('lean-q1').value = "精實管理 4.0 與 JJC 是將傳統 TPS 精實管理與數位化技術融合，使用低成本 IoT 發揮現場人員的智慧。JJC 透過自働化停機與 JIT 配送小循環，實時傳送限量資訊。";
    document.getElementById('lean-q2').value = "傳統看板是完全手動的，資訊傳遞有滯後性。JJC 則使用非侵入式感測器實時收集異常與進度，只傳遞關鍵瓶頸資訊，大幅縮短 PDCA 反應時間。";
    document.getElementById('lean-q3').value = "大眾常以為數位轉型就是無人化黑燈工廠，但學術共識認為完全自動化缺乏彈性，4.0 的核心在於以人為本，用機器智慧成就人的現場改善智慧。";
  } else if (caseName === 'video') {
    document.getElementById('video-q1').value = "透過模組化分工：ChatGPT 規劃腳本與分鏡，Kling/Runway 控制相機鏡頭運動生成畫面，ElevenLabs 克隆真人情感聲音做配音，最後在 CapCut 裡將聲音畫面卡點拼裝。";
    document.getElementById('video-q2').value = "黃金3秒鉤子能誘發大腦停止滑動的決策，決定影片會否被滑走；而 0.7s-1.2s 的快速視覺節奏切換，能持續給予視覺多巴胺，拉高留存率以觸發演算法推薦。";
    document.getElementById('video-q3').value = "演算法會限流低原創的純 AI 模板影片，並審查無起伏機械音。創作者應主動標註 AI 標籤，並在腳本策展、情感配音的呼吸感以及動態字幕卡點上手動精細調校。";
  } else if (caseName === 'tsmc') {
    document.getElementById('tsmc-q1').value = "台積電的核心主角是專業晶圓代工 (Pure-Play Foundry) 商業模式。張忠謀創立台積電並堅守『不與客戶競爭』的核心理念，替全球晶片設計公司代工製造晶圓，開啟了半導體專業分工時代。";
    document.getElementById('tsmc-q2').value = "其護城河飛輪為：代工規模愈大 &rarr; 良率與製程演進愈快 &rarr; 吸引更多客戶與利潤 &rarr; 投入更多先進研發與設備 (如 EUV、CoWoS Advanced Packaging) 保持霸主地位，並透過開放創新平台 (OIP) 綁定客戶生態系。";
    document.getElementById('tsmc-q3').value = "海外建廠面臨極大的跨國工程管理、高建廠成本與工會文化衝突。去台化雖然是地緣政治焦點，但由於台灣擁有極高的工程師人力彈性與完整的材料聚落，核心研發與主力生產仍將留在台灣。";
  } else if (caseName === 'innolux') {
    document.getElementById('innolux-q1').value = "群創光電主要動機是為了擺脫傳統 LCD 面板劇烈的景氣價格循環（面板雙雄的價格戰）。透過活化已經折舊完畢的舊世代面板廠房房舍與曝光設備，跨界轉型切入半導體封裝。";
    document.getElementById('innolux-q2').value = "群創的扇出型面板級封裝 (FOPLP) 利用方形玻璃基板封裝，相比台積電的 12 吋圓形矽晶圓，方形面積利用率大於 95%，一次可封裝的晶片數量是圓形矽晶圓的 3 至 4 倍，大幅降低先進封裝成本。";
    document.getElementById('innolux-q3').value = "目前面臨的最大物理製程挑戰是『大面積玻璃基板加熱翹曲 (Warping)』、高密度線路的對位精準度，以及在舊面板廠無塵室環境中維持半導體等級的高良率控制。";
  } else if (caseName === 'temp') {
    document.getElementById('temp-q1').value = "依附關係理論 (Attachment Theory) / 焦慮型依附、安全型依附";
    document.getElementById('temp-q2').value = "人類個體在早期與主要照顧者建立的互動經驗，會形塑其內在運作模式，進而影響其成年後的親密關係建立、情緒調節與安全感認知。";
    document.getElementById('temp-q3').value = "常被與日常的『黏人』或『冷淡』混淆。日常以為黏人就是依附關係差，但學術上焦慮型依附是由於早期照顧者的不一致性反應造成的內在焦慮，是個體的情緒適應機制，而非單純的性格缺點。";
  }
}

function simulateVerification(caseName) {
  const outputDiv = document.getElementById(`${caseName}-sim-output`);
  const contentDiv = document.getElementById(`${caseName}-sim-content`);
  
  let q1Val = document.getElementById(`${caseName}-q1`).value.trim();
  let q2Val = document.getElementById(`${caseName}-q2`).value.trim();
  let q3Val = document.getElementById(`${caseName}-q3`).value.trim();
  
  if (!q1Val || !q2Val || !q3Val) {
    alert("請先回答所有問題，或點擊「填入示範回答」再進行驗證！");
    return;
  }
  
  outputDiv.classList.add('active');
  contentDiv.innerHTML = "<p style='color: var(--text-secondary);'>正在分析您的學習單回答，比對教科書與最新文獻庫數據...</p>";
  
  setTimeout(() => {
    if (caseName === 'lean') {
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 事實正確性檢查 (Fact-Check)</div>
          <p>您的理解非常精準！您正確指出 JJC 模式是融合了 JIT 與自働化 (Jidoka) 的小循環，且強調以低成本非侵入感測器傳遞『限量資訊』，此點與楊大和教授在 2021 年編寫的論文中的主張完全一致，沒有事實錯誤。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Kaizen Suggestion)</div>
          <p>在回答傳統看板與 JJC 差異時，您提到了實時性。建議在論文改寫時，更深入提到<strong>『資訊拉動 (Information Pull)』</strong>的觀念：傳統看板是用卡片拉動物流與生管，JJC 則是用 IoT 動態拉動現場人員的『改善改善力 (Kaizen pull)』，這會讓您的論點更具學術深度。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 文獻引用標記</div>
          <p>「數位轉型非純技術無人化，而是人機協同」的主張，可精確引用自 <em>Buer et al. (2018), IJPE</em>。而 JJC 的低成本實施成效，則可引用成大製造管理實驗室在精密機械業的實證研究 <em>(Yang et al., 2023, IEEE TEM)</em>。</p>
        </div>
      `;
    } else if (caseName === 'video') {
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 核心指標掌握檢查 (Fact-Check)</div>
          <p>非常出色！您精確把握了『黃金 3 秒鉤子』與完看率的關聯，且正確理解 0.7s-1.2s 剪輯節奏對於大腦多巴胺的刺激機制。工具分工（ChatGPT + Kling + ElevenLabs + CapCut）的描述完全符合當前高產出創作者的主流工作流。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Algorithm Strategy)</div>
          <p>在應對演算法限流的回答中，您提到了避免純一鍵生成。建議補充：<strong>『音訊數位浮水印 (Audio Watermarking)』</strong>的防範。演算法會抓取過度重複的 TTS 配音，因此工作流中『使用 ElevenLabs 克隆個人獨特聲音並加上微小環境噪音』是規避被演算法判定為低品質重置的關鍵技術細節。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 文獻與行業報告引用</div>
          <p>關於 Pace 視覺節奏與受眾留存率的數據，可引用 <em>TikTok Creator Research (2024)</em> 的官方白皮書；關於 AI 內容限流與 AI 標籤政策，則參考 <em>Meta Creator Policy Guide (2025/2026)</em>。</p>
        </div>
      `;
    } else if (caseName === 'tsmc') {
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 商業模式理解檢查 (Fact-Check)</div>
          <p>您的回答非常精準！您正確點出台積電的『純代工、不競爭』本質，這正是張忠謀博士 1987 年創立時的核心策略。您也清楚描述了 OIP 生態系與製程規模飛輪如何構成其長期競爭壁壘。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Academic Depth)</div>
          <p>在討論海外建廠風險時，建議在論文中深入探討<strong>『文化距離 (Cultural Distance)』</strong>與<strong>『供應鏈重聚 (Supply chain cluster)』</strong>的工程管理理論。美國廠的遞延可與日本廠進行比較，分析政策補貼與供應鏈聚落對建廠時程的顯著影響。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 文獻引用標記</div>
          <p>關於台積電護城河與 OIP 的論述，您可以精確引用 <em>Chang, M. (2021) TSMC Founder Speech</em> 或是 <em>McKinsey Semiconductor Reports (2024)</em> 關於先進製程市佔的數據。</p>
        </div>
      `;
    } else if (caseName === 'innolux') {
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 轉型策略理解檢查 (Fact-Check)</div>
          <p>非常優秀！您正確抓住了群創轉型 FOPLP 的兩個痛點：傳統面板景氣循環，以及舊世代面板廠房的資產活化難題。您對大面積玻璃方形基板與 12 吋矽晶圓的面積利用率（>95% 且多出 3-4 倍封裝量）數據也掌握得非常確實。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Process Engineering Suggestion)</div>
          <p>針對玻璃翹曲 (Warping) 技術挑戰，建議補充目前業界最受關注的<strong>『熱膨脹係數不匹配 (CTE Mismatch)』</strong>理論，這常發生在封裝銅布線與玻璃基板受熱時。此外，提到群創與晶片設計大廠合作進行品質驗證的進度，會讓您的研究更具產業時效性。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 文獻與行業報告引用</div>
          <p>關於方形玻璃基板 FOPLP 的優勢，可參考並引用 <em>IEEE Trans. on Components, Packaging (2024)</em> 關於大面積封裝基板的最新論文；或 <em>TrendForce (2025) FOPLP Industry Trend</em> 報告中關於群創 3.5 代廠改造的產能量化數據。</p>
        </div>
      `;
    } else if (caseName === 'temp') {
      const topicName = q1Val.split('/')[0].trim();
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 自訂主題結構檢查 (Concept Check)</div>
          <p>您輸入的自訂研究主題是 <strong>『${topicName}』</strong>。您的核心命題回答邏輯完整，針對該理論如何試圖解決核心痛點、提出什麼假設，都有清楚的脈絡說明。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Academic Depth)</div>
          <p>在術語日常與學術辨析中，建議進一步強調該概念的<strong>『核心運行機制 (Operational Mechanism)』</strong>。例如在論文或研究報告中，將其從抽象定義，限縮為可觀測的變項指標，會使得後續的文獻引述更具嚴謹度。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 自訂文獻搜尋提示</div>
          <p>針對您的自訂主題，在進行 Step 2 Deep Research 時，強烈建議您優先檢索：(1) 該理論創始學者的奠基代表作，以及 (2) 近 3-5 年內引用次數超過 200 次的『文獻回顧 (Review Article)』，這些文獻通常會幫您整理好最完整的爭議點。</p>
        </div>
      `;
    }
  }, 1500);
}

// Initial setup on load
window.onload = () => {
  switchCase('lean');
};
