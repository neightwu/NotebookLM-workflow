const workflowData = {
  // ==========================================
  // ACADEMIC TRACK CASES
  // ==========================================
  lean: {
    title: "精實管理 4.0 (成大楊大和教授論文 - JJC 模式)",
    track: "academic",
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
          "在 NotebookLM 左側欄點擊「新建來源」並選擇「在網路上搜尋新來源」",
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
            <p class="vk-desc">心智圖會清楚呈現 `自働生產管理環 JJC` &rarr; `物聯網低成本感測` &rarr; `以人為本現場 PDCA` 的因果關係，這能讓您直觀理解大系統是如何被分解為自治的小型控制環的。</p>
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
                    - <strong>哲學支柱：</strong>以人為本、消除浪費、持續改善 (Kaizen)<br>
                    - <strong>核心機制：</strong>自働化 (Jidoka) & JIT 融合於自働生產管理環 (JJC)<br>
                    - <strong>實踐路徑：</strong>現場簡易智慧化 (Easy Smartification) 獲取限量數據
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
  lppd: {
    title: "精實研發 (成大洪郁修教授 - LPPD 體系)",
    track: "academic",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "精實產品與流程開發 (LPPD) 的研究應從經典理論與架構起步。在 NotebookLM 中只上傳洪郁修教授的 LPPD 講義或 Allen Ward 的經典理論著作。這能保證 AI 完全基於「套式同步工程 (SBCE)」與「大部屋 (Obeya)」的學術定義，避免被網路上雜亂的專案管理工具所干擾。",
        instructions: [
          "在 NotebookLM 建立新的筆記本 (Notebook)",
          "上傳洪郁修教授的精實研發講義，或 Ward & Sobek (2014) 的 LPPD 經典理論書籍 PDF",
          "複製下方 Prompt 貼到對話框，整理出精實研發的核心學術框架"
        ],
        promptTemplate: `請完全基於這份教科書與講義內容，為我建立 [精實產品與流程開發 (LPPD)] 的基礎知識框架。

請列出：
1. 精實研發 (LPPD) 的標準學術定義，以及它如何將精實思維從現場生產延伸至上游研發？
2. 最核心的 3 至 5 個專有學術名詞（如 SBCE, Obeya, A3, LAMDA），附上定義與機制
3. 主流的「學界共識」是什麼？

請特別標明出版年份，以便後續用前沿文獻進行補強。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準學術定義</h3>
            <p><strong>精實產品與流程開發 (Lean Product and Process Development, LPPD)</strong> 是一套將精實哲學應用於設計與工程開發階段的系統性理論。其核心在於透過「消除研發過程中的資訊與決策浪費」、「加速跨部門知識學習」與「預先規劃可製造性」，建立一個能持續產出卓越產品的永續研發系統。</p>
            
            <h3>2. 核心專有名詞</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">套式同步工程 (Set-Based Concurrent Engineering, SBCE)</div>
                <div class="term-meta">研發決策機制</div>
                <div class="term-desc">與傳統鎖定單一方案再修改的「點式設計」不同。SBCE 主張在初期同時保留多個可行方案，透過平行測試獲取實證數據後，才逐步收斂並淘汰劣勢方案，以延遲決策點避免重工。</div>
              </div>
              <div class="term-card">
                <div class="term-word">大部屋 (Obeya)</div>
                <div class="term-meta">視覺化協作空間</div>
                <div class="term-desc">源自日文「大房間」，是指跨功能部門實體或數位的協作中心。透過高度視覺化的專案進度、技術瓶頸與績效看板，打破跨部門藩籬，落實即時決策與問題為導向的溝通。</div>
              </div>
              <div class="term-card">
                <div class="term-word">A3 報告 (A3 Problem Solving)</div>
                <div class="term-meta">邏輯思考與溝通工具</div>
                <div class="term-desc">限制在一張 A3 尺寸紙張上，以結構化邏輯（現況、根因、對策、效果確認）精準總結並傳承問題解決過程，是精實文化中傳遞知識的核心媒介。</div>
              </div>
              <div class="term-card">
                <div class="term-word">LAMDA 學習循環</div>
                <div class="term-meta">知識工作者 PDCA</div>
                <div class="term-desc">專為研發人員設計的學習引擎，包含：Look (現場觀察)、Ask (深入探討)、Model (建立模型)、Discuss (對話討論)、Act (採取行動)，用來快速學習並將知識標準化。</div>
              </div>
            </div>

            <h3>3. 發展歷史與學界共識</h3>
            <p><strong>代表學者：</strong>國立成功大學工業設計學系 <strong>洪郁修教授</strong>、Allen Ward、Durward Sobek。</p>
            <p><strong>學界共識：</strong>精實研發絕非單純的縮短研發進度（Speed），而是要創造一個「能夠不斷再利用的知識庫」。研發的產物不僅是產品本身，更是「創造產品的知識與流程」。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 跨文獻交叉",
        vkThought: "精實研發理論多以豐田汽車等重工業為對象。我們需要利用 Deep Research 模式去搜尋最新 5 年（2021-2026）對於『數位化/虛擬大部屋 (Virtual Obeya)』或『半導體/高科技業導入精實研發』的前沿文獻，補充行業新知識與學術爭議焦點。",
        instructions: [
          "在 NotebookLM 點選「新建來源」 &rarr; 選擇「網路上搜尋」",
          "開啟 Deep Research 模式並輸入針對性 Prompt",
          "等待 3 分鐘，最新學術前沿將被自動匯入，補充我們在 Step 1 漏掉的最新研究"
        ],
        promptTemplate: `我手邊已經有 [精實產品與流程開發 (LPPD)] 的經典理論著作。
請幫我研究近 5 年（2021-2026 年）的最新學術突破與前沿應用：

1. 該領域的重要文獻：
   - 近期在「數位化/虛擬大部屋 (Virtual Obeya)」或「高變異製造業導入精實研發」的實證案例
   每一篇請附上：主要論點、發表年份、作者、以及 DOI 或連結
2. 學術界目前的爭議焦點（如：精實研發中的知識標準化是否會壓抑設計師的創意與靈感？實體大部屋 vs 遠距數位協作的成效爭論）
3. 大眾對精實研發常見的誤解

主要以學術期刊論文、文獻回顧為主。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. LPPD 前沿文獻與突破研究</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>研究文獻 / 作者</th>
                    <th>年份</th>
                    <th>主要發現與學術貢獻</th>
                    <th>DOI / 連結</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Obeya Digitization in Collaborative R&D</strong><br>Hung, Y. S. (洪郁修), et al.</td>
                    <td>2023</td>
                    <td>探討在跨國混合辦公環境中，實體 Obeya 轉換為虛擬數位大部屋的界面設計與協作資訊流模型，證明數位大部屋能顯著降低 27% 資訊斷點。</td>
                    <td><a href="#" style="color:var(--secondary)">10.1016/j.destud.2023.1009</a></td>
                  </tr>
                  <tr>
                    <td><strong>Set-Based Design in High-Tech Industry</strong><br>Sobek, D. K., et al.</td>
                    <td>2022</td>
                    <td>研究將 SBCE 套式設計引入半導體光罩製程開發，指出相較傳統點式設計，平行保留多套參數方案能降低 40% 的後期設計修改 (Redesign) 機率。</td>
                    <td><a href="#" style="color:var(--secondary)">10.1109/TEM.2022.31502</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. 學術界核心爭議</h3>
            <ul>
              <li><strong>「標準化知識」與「設計創意」之爭：</strong>有設計學者批評，精實研發過度強調「標準化 (A3, Checklist)」與「重複利用過去的貿易曲線 (Trade-off curves)」，這在物理工程上行得通，但在講求直覺與突破的工業設計、使用者體驗端，可能導致設計趨向保守，壓抑了開創性創意。洪郁修教授等學者則主張，標準化是釋放創意的基石，省去重置輪子的時間能讓設計師更專注於真正的核心創新。</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜掃除專有名詞障礙",
        vkThought: "精實研發 (LPPD) 的許多名詞（如 A3 報告、大部屋）常被日常實務直接當成「紙張規格」或「開會大辦公室」，這會失去其學術上的管理意義。這一步我們使用報告功能產出術語陷阱表，釐清學術本質。",
        instructions: [
          "在 Studio 面板點擊自訂報告",
          "複製 Prompt 模板，產出 LPPD 術語對照表"
        ],
        promptTemplate: `針對 [精實研發與 LPPD] 學術領域，請幫我整理「術語陷阱對照表」。

請找出 3 至 5 個常被一般人或實務界誤解的學術詞彙（如 A3, Obeya, SBCE），這些詞日常中也常用，但學術定義完全不同。

整理格式：
| 詞彙 | 日常意思 | 學術意思 | 為什麼容易混淆 |`,
        outputContent: `
          <div class="output-card">
            <h3>精實研發 LPPD 術語陷阱對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>詞彙 (中/英)</th>
                    <th>日常/實務界意思</th>
                    <th>學術/精實研發定義</th>
                    <th>為什麼容易混淆</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A3 報告</strong><br>(A3 Report)</td>
                    <td>用 A3 紙印出來的投影片，或是普通的報告單。</td>
                    <td>一套基於 A3 限制的「思考與溝通過程」。強調精準抓出根因並以視覺化、一頁紙邏輯引導跨部門共識。</td>
                    <td>日常以為只是一張紙，但學術上它代表著 PDCA/LAMDA 的嚴謹思考脈絡，重點在於「寫 A3 的溝通討論過程」而非紙張本身。</td>
                  </tr>
                  <tr>
                    <td><strong>大部屋</strong><br>(Obeya)</td>
                    <td>大家坐在一起工作的大型開放式辦公室或會議室。</td>
                    <td>跨部門協作的視覺化管理中心。將關鍵績效、專案路徑圖與阻礙點視覺化張貼在牆面上，以問題為導向推動即時決策。</td>
                    <td>日常以為只是辦公室硬體，但學術上它是一種「消除資訊隔閡與延遲」的管理機制與資訊流設計。</td>
                  </tr>
                  <tr>
                    <td><strong>套式同步工程</strong><br>(Set-Based Concurrent Engineering, SBCE)</td>
                    <td>同時做很多無關的設計，或是亂投石問路。</td>
                    <td>在研發初期系統化保留多個並行的可行方案，隨測試推進在關鍵決策點（Decision gate）才逐步收斂方案。</td>
                    <td>日常習慣「點式設計」（猜一個最優方案並不斷修改），SBCE 則是平行探索，藉由延遲決策來降低重大改版重工。</td>
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
        vkThought: "利用 Studio 的心智圖，查看 LPPD 理論中『快速學習』與『消除研發浪費』的關係，掌握全局結構。",
        instructions: [
          "在 Studio 面板點擊心智圖",
          "查看分支，抓出 SBCE 決策樹與 A3 報告的關聯線。"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">心智圖會清楚呈現 `精實研發 LPPD` &rarr; `套式同步工程 SBCE` &rarr; `延遲決策降低重工` 的因果關係，點擊這些關聯線能讓您快速掌握老舊面板廠是如何透過 TRIZ 分割與改用原則重獲新生的。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 精實研發 LPPD 心智圖</span>
              <span style="color: var(--success);">🌿 結構分支圖已建立</span>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源文獻</div>
                <div class="mock-source-item active">☑ 洪郁修教授著作.pdf</div>
                <div class="mock-source-item active">☑ SBCE先進製程研究.txt</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>精實研發心智圖全局摘要：</strong><br>
                    核心轉折點在於活化 3.5 代廠。原本該廠生產 LCD 已無競爭力，透過改裝為 FOPLP 先進封裝生產線，搖身一變成為能封裝 AI 晶片的高階廠房，成功打入半導體供應鏈。
                  </div>
                </div>
              </div>
              <div class="mock-studio">
                <div class="mock-studio-title">Studio 視圖</div>
                <div class="mock-studio-item active">🌿 精實研發 LPPD</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "設定角色為精實產品開發與設計管理領域指導教授。依序發送歷史脈絡、相近理論（如 Agile 敏捷開發與 LPPD 的異同）、與實際應用爭議，建構完整的知識地圖。",
        instructions: [
          "設定對話角色為「精實產品開發與工程管理領域教授，回覆較長且詳實」",
          "依序發送歷史、比較、應用三道問題，並記錄關鍵記事。"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [精實研發 (LPPD)]：
1. 這個理論出現之前，研發管理學界用什麼解釋研發流程與專案效率？
2. 奠基者 (如 Allen Ward) 為什麼覺得既有解釋不夠？他做了什麼關鍵研究來支持他的主張？
3. 近 20 年的研究方向變化？

第二問｜理論比較：
請找出近似理論（如 Agile 敏捷開發、Stage-Gate 階段關卡控制）與 LPPD 比較：
1. 理論名稱（中英對照）
2. 為什麼常被對照討論
3. 跟 LPPD 最容易混淆的地方是什麼
(請要求使用「資料表」格式產出)

第三問｜應用與爭議：
1. 這個理論已經被應用到哪些原本學科以外的領域？
2. 學界目前的主要爭議與未解問題？
3. 3分鐘口語化開場與常見誤解？`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：指導教授 LPPD 對話紀錄片段</h3>
            <p><strong>第一問（歷史與起步）回答節錄：</strong><br>
            「在 LPPD 被系統化整理前，學界多採用『Stage-Gate 階段關卡法』來控制研發進程。Stage-Gate 強調剛性的里程碑審查，但往往在後期才發現零件衝突。Allen Ward (1995) 透過對豐田汽車研發體系的實地研究，指出豐田在車型開發初期會同時設計數百套黏土模型（SBCE），這顛覆了傳統的一步到位觀念，論證了延遲決策的科學性。」</p>
            
            <p><strong>第二問（Agile vs. Stage-Gate vs. LPPD）對照表節錄：</strong><br>
            「Stage-Gate 是序列式的，追求變更控制；Agile 敏捷開發則源自軟體業，強調快速交付增量；而 LPPD 則適用於軟硬體系統整合，透過 SBCE 平行探尋物理邊界（Trade-off curves），在決策點前保留最大的工程彈性。大眾常將 Agile 的小組會議與 LPPD 的大部屋混淆，但大部屋的核心在於跨功能部門的黃光、工藝、採購等實體與資訊視覺化統合。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "這一步是將「AI 的內容」轉化為「你自己的知識」的關鍵。請在下方的學習單中填寫您對精實研發核心架構的理解，點擊驗證後，系統會事實查核並給予事實校正與深化建議。",
        instructions: [
          "在下方輸入框中輸入您的「精實研發」回答內容",
          "點擊「模擬 AI 教授驗證」，系統會執行智慧 fact-check，指出您理解中是否有事實錯誤或概念偏差"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中針對精實研發填寫的答案]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於 SBCE 與大部屋的部分
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 精實研發 (LPPD) 的核心定義為何？它如何有別於傳統「點式設計」開發？</label>
              <textarea id="lppd-q1" class="practice-input" placeholder="請試著回答... (提示：可提到套式同步工程 SBCE，初期保留多方案平行測試收收斂)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 什麼是「大部屋 (Obeya)」與「A3 報告」，它們在研發團隊協作中如何運作？</label>
              <textarea id="lppd-q2" class="practice-input" placeholder="請試著回答... (提示：跨功能視覺化管理空間打破隔閡，一頁紙 A3 結構化思考溝通)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 請說明 LAMDA 學習循環（Look, Ask, Model, Discuss, Act）的步驟與其重要性。</label>
              <textarea id="lppd-q3" class="practice-input" placeholder="請試著回答... (提示：Look 觀察、Ask 追問、Model 建模、Discuss 討論、Act 行動，為知識工作者設計的 PDCA)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('lppd')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('lppd')">填入示範回答</button>
            </div>
            <div id="lppd-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 指導教授實時反饋
              </div>
              <div id="lppd-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存成筆記建立知識螺旋",
        vkThought: "我們將「精實研發工具與 SBCE 應用地圖」存成筆記並轉成「來源」。當未來有最新精實研發數位轉型論文（如虛擬協作大部屋）發表時，上傳並做螺旋比對，完成知識的滾動與進化。",
        instructions: [
          "在 NotebookLM 點擊對話旁「儲存為記事」，為筆記命名為「精實研發-我的知識地圖」",
          "點擊記事卡片右上角 &rarr; 點選「轉成來源」",
          "未來若看見該主題的新論文，直接上傳至同一個筆記本，並發送交叉比對 Prompt"
        ],
        promptTemplate: `我上次研究精實研發的筆記已經在來源 (Notes) 裡了。
現在我加入了一些新的精實研發實證論文。

請幫我比較：
1. 跟我上次的知識地圖相比，有什麼新的發現或論點？
2. 這些新資料會挑戰我之前對核心命題、近似理論比較、或跨領域應用的判斷嗎？
3. 有沒有我應該特別注意的新爭議或新證據？
4. 如果我要更新文獻回顧，這幾篇新文獻應該插入哪一節？`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：精實研發知識庫更新對照</h3>
            <p><strong>新加入來源：</strong><em>Hung, Y. S. (2026). Digital Obeya Integration with GenAI Assistance.pdf</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026年最新成大工業設計系論文顯示了以下重大調整：<br><br>
              <strong>1. AI 輔助 Obeya：</strong>數位大部屋系統不再只是靜態展示，而是融入了生成式 AI 秘書。AI 能實時分析大部屋牆面上的 A3 報告，自動標記處於阻礙狀態的跨部門關聯任務並發出警告。<br><br>
              <strong>2. 知識螺旋演進：</strong>這項發現挑戰了您舊筆記中『數位大部屋相較實體大部屋缺乏自發討論』的結論。實證顯示，AI 看板的自動根因分析能提高 35% 的跨部門自發性討論次數。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  academic_blank: {
    title: "自訂學術研究空白流程 (通用模板)",
    track: "academic",
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
          "點記展開所有分支，花 3-5 分鐘瀏覽所有子節點",
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
              <label class="practice-label">1. 請輸入您的「自訂學術主題」與「核心專有名詞」：</label>
              <textarea id="academic_blank-q1" class="practice-input" placeholder="例如：依附理論 / 客體關係 / 品牌擴展策略 / 流體力學應用..."></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 核心命題 (請用您自己的話簡述這個理論在主張什麼)：</label>
              <textarea id="academic_blank-q2" class="practice-input" placeholder="請試著回答... (提示：先講這個理論為了解決什麼，核心主張是什麼)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 與近似理論最大的差別在哪裡？日常最常被誤解之處？</label>
              <textarea id="academic_blank-q3" class="practice-input" placeholder="請試著回答... (提示：列出一個最容易搞混的相近概念並做比較)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('academic_blank')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('academic_blank')">填入自訂範例回答</button>
            </div>
            <div id="academic_blank-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 指導教授實時反饋
              </div>
              <div id="academic_blank-sim-content" class="sim-content"></div>
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

  // ==========================================
  // INDUSTRY TRACK CASES
  // ==========================================
  tsmc: {
    title: "標竿企業研究案例：台積電 (TSMC) 商業模式與護城河",
    track: "industry",
    steps: [
      {
        stepBadge: "Step 0",
        stepTitle: "初始化環境｜繁中設定與建立筆記",
        vkThought: "產業研究需要處理大量外文分析報告，第一步在 NotebookLM 中先做好繁體中文輸出設定，能確保所有預設生成的雙人語音對談或簡介皆為高品質的繁中，加速後續解讀效率。",
        instructions: [
          "登入 notebooklm.google.com 進入主控台",
          "點選右上角「設定」圖示 &rarr; 「輸出語言」 &rarr; 選擇「中文 (繁體)」",
          "點選「＋ 新建」建立全新的筆記本，並命名為「台積電 (TSMC) 深度產業研究」"
        ],
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">完成輸出語言設定後，NotebookLM 便會自動將英文文獻、法說逐字稿中的關鍵數據與專業評論，統一以流暢的繁體中文呈現，這對後續理解專門半導體研究尤為重要。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 初始化工作區</span>
              <span style="color: var(--primary);">● 語言設定：中文（繁體）</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 1fr;">
              <div style="padding: 2rem; text-align: center; color: var(--text-secondary);">
                <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">🎉 筆記本已成功建立</div>
                <div>名稱：「台積電 (TSMC) 深度產業研究」</div>
                <div style="margin-top: 1rem; font-size: 0.85rem; opacity: 0.8;">請繼續執行 Step 1 進行 Deep Research 起步！</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜用 Deep Research 建立起步報告",
        vkThought: "完全陌生的公司，不要盲目去 Google 搜新聞。這一步我們使用 NotebookLM 的網路搜尋功能搭配 Deep Research 模式。輸入結構化的 Prompt，讓 AI 跑多輪搜尋，幫我們把台積電的核心業務、代工模式、晶圓製程做成第一份「起步報告」，自動匯入為來源。",
        instructions: [
          "點選左側「新增來源」 &rarr; 選擇「網路上搜尋」 &rarr; 切換至「Deep Research」模式",
          "複製下方起步 Prompt 貼入搜尋對話框發送",
          "等待約 3 分鐘，AI 寫完的長篇報告與其引用的十多個權威網址會自動成為本筆記本的 Sources"
        ],
        promptTemplate: `我想深入了解 [台積電 (TSMC)] 這家公司。請幫我研究：
1. 這家公司的核心業務和主要產品 (如先進製程 3nm, 5nm)
2. 他們的商業模式（怎麼賺錢、誰是客戶）
3. 在產業中的競爭地位和主要競爭者 (如 Samsung, Intel)
4. 創立背景和重要的發展轉折點 (張忠謀的純代工決策)
5. 近期的重大策略方向 (如 CoWoS 先進封裝擴產、海外設廠)
6. 這家公司所處的半導體產業基本運作方式（上游設計、中游製造代工、下游封測）

請主要基於有深度分析、有具體數據的資料，不要放入只有基本介紹的短篇百科。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 核心業務與製程數據</h3>
            <p><strong>台積電 (TSMC)</strong> 是全球晶圓代工市場霸主。先進製程（指 7 奈米及以下製程）營收佔比已超過 60%，其中 3 奈米與 5 奈米製程為營收主力，主要供應 Apple (iPhone/Mac 晶片) 與 NVIDIA (AI H100/Blackwell 晶片)。其全球晶圓代工市佔率突破 60%，在先進製程領域市佔率更超過 90%。</p>
            
            <h3>2. 商業模式與創辦背景</h3>
            <p><strong>純代工模式 (Pure-Play Foundry)：</strong>由張忠謀博士於 1987 年創立，承諾「絕不設計晶片、絕不與客戶競爭」。此一決定顛覆了當時以 Intel、TI 等兼具設計與製造的 IDM 模式，讓晶片設計公司能輕資產營運，成功綁定全球無廠設計商 (Fabless) 生態圈。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "清理戰場｜篩選高品質來源與補充 IR 資料",
        vkThought: "Deep Research 抓取的網頁可能有廣告或重複資訊。我們要「清理戰場」，移除無效網頁，並「手動補充」台積電的法說會簡報（Investor Relations Deck）、年報、以及 Morris Chang 在工研院的公開演講 YouTube 連結。這些第一手資料能保證研究的絕對事實正確性。",
        instructions: [
          "檢查左側 Sources 列表，將少於 500 字、充斥廣告或內容重複的網頁來源移除 (按垃圾桶)",
          "點選「新增來源」 &rarr; 選擇「上傳檔案」 &rarr; 上傳台積電最新一季的「法說會簡報 PDF」與「年報 PDF」",
          "點選「新增來源」 &rarr; 選擇「YouTube 連結」 &rarr; 貼上張忠謀創始人專訪等 YouTube URL"
        ],
        promptTemplate: `無（本步驟為來源篩選與手動補充 IR、年報、YouTube 訪談檔案，無需發送 Prompt）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在左側來源清單中，您會看到上傳的 `TSMC_Q3_Earnings_Presentation.pdf` 與 `張忠謀演講_YouTube`。NotebookLM 會自動擷取 YouTube 的字幕逐字稿，這會讓後續關於「護城河」與「地緣政治挑戰」的對話極其精準且有憑有據。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 清理戰場與第一手資料導入</span>
              <span style="color: var(--success);">● 來源庫已完成優化</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 240px 1fr;">
              <div class="mock-sidebar" style="border-right:1px solid var(--border-glass);">
                <div class="mock-source-title">高品質來源清單 (12)</div>
                <div class="mock-source-item active">☑ [網頁] Deep Research 報告</div>
                <div class="mock-source-item active">☑ [PDF] TSMC 最新季報.pdf</div>
                <div class="mock-source-item active">☑ [YT] 張忠謀 Morris Chang 訪談</div>
                <div class="mock-source-item" style="color:var(--text-muted); text-decoration: line-through;">☒ [網頁] 某股票論壇閒聊 (已剔除)</div>
              </div>
              <div class="mock-main" style="padding:1.5rem; color:var(--text-secondary);">
                <h3>戰場清理完成！</h3>
                <p>已排除低價值輿情噪音，保留台積電官方年報、財務報表與創辦人訪談。這能確保我們在 Step 3 提煉的術語以及 Step 5 進行的商業模型問答具有百分之百的學術與產業嚴謹度。</p>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "掃除障礙｜掌握核心半導體術語",
        vkThought: "半導體產業有非常多英文縮寫（如 EUV、CoWoS、OIP、EDA）。這一步我們直接在主 Chat 框輸入針對性的術語提問，讓 AI 幫我們整理出最常出現的 5 個核心專有名詞及其對應的運作機制，並將其「儲存為記事」放進右側 Studio，掃除閱讀障礙。",
        instructions: [
          "在主對話框 (Chat) 輸入下方 Prompt 發送",
          "在 AI 回覆卡片旁點擊「儲存為記事」，並命名為「台積電與先進製程術語表」"
        ],
        promptTemplate: `請幫我整理這些來源資料中出現的 [台積電與先進製程] 相關核心術語，包含英文原文和中文解釋。

整理格式：
- 術語（英文原文）：一句話解釋這是什麼，並說明其在台積電代工中的運作機制
- 特別標註在產業分析或投資研究中最常出現的關鍵字 (如 CoWoS, EUV, OIP)
- 如果有縮寫，請附上全稱

請按照「理解這個產業必須知道的」優先程度排序。`,
        outputContent: `
          <div class="output-card">
            <h3>台積電先進製程術語表</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">晶圓級封裝 (CoWoS)</div>
                <div class="term-meta">Chip-on-Wafer-on-Substrate</div>
                <div class="term-desc">將 GPU/CPU 晶片與高頻寬記憶體 (HBM) 封裝在同一個矽中介層上，突破物理空間限制。是當前 AI 晶片效能提升的最核心瓶頸技術。</div>
              </div>
              <div class="term-card">
                <div class="term-word">開放創新平台 (OIP)</div>
                <div class="term-meta">Open Innovation Platform</div>
                <div class="term-desc">台積電建立的設計生態系。整合了 EDA 軟體、IP 設計授權、以及製造參數，使客戶如 Apple, NVIDIA 能像拼積木一樣快速設計晶片，構成強大壁壘。</div>
              </div>
              <div class="term-card">
                <div class="term-word">極紫外光微影 (EUV)</div>
                <div class="term-meta">Extreme Ultraviolet Lithography</div>
                <div class="term-desc">使用 13.5nm 極短波長光線在晶圓上刻出微小電路。台積電是全球最大的 EUV 曝光機機隊擁有者，奠定了其先進製程霸主地位。</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "全局觀照｜利用 Studio 掌握生態系全貌",
        vkThought: "在問問題前，先看一遍資料全貌。利用 NotebookLM 自動產出的心智圖（Mind Map）與資料表工具，理解台積電與供應鏈的關聯（如設備商 ASML、客戶 Apple/NVIDIA），這能幫助我們理解地緣政治分散建廠對毛利率的影響。",
        instructions: [
          "打開右側「Studio (工作室)」面板",
          "點選「心智圖 (Mind Map)」並展開所有分支，花 3-5 分鐘瀏覽核心與衍生概念",
          "點選「簡介文件」，快速掃描台積電本季法說會的核心數據 (如毛利率、資本支出)"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」與「簡介文件」生成即可）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在 Studio 心智圖中，點選 `美國亞利桑那建廠進度` 或 `日本熊本廠良率`，NotebookLM 會自動將對應的法說會答詢脈絡抽出來，在對話框裡做成摘要，幫您快速掌握跨國建廠進度與供應鏈關係。</p>
          </div>
          <div class="notebooklm-mock">
            <div class="mock-header">
              <span>NotebookLM - 全局心智圖與簡介</span>
              <span style="color: var(--secondary);">🌿 供應鏈生態圖已建立</span>
            </div>
            <div class="mock-body" style="grid-template-columns: 180px 1fr 240px;">
              <div class="mock-sidebar">
                <div class="mock-source-title">來源資料庫</div>
                <div class="mock-source-item active">☑ 台積電年報.pdf</div>
                <div class="mock-source-item active">☑ Q3法說會簡報.pdf</div>
              </div>
              <div class="mock-main">
                <div class="mock-chat-area">
                  <div class="mock-bubble ai">
                    <strong>您點選了節點：[海外建廠毛利率衝擊]</strong><br>
                    依據來源，海外建廠成本較台灣高出 30% 至 100%。台積電在法說會中回應，將透過定價策略與政府補貼，確保毛利率仍能維持在長期目標 53% 以上 [2]。
                  </div>
                </div>
              </div>
              <div class="mock-studio" style="background:#131822;">
                <div class="mock-studio-title">Studio 工具視圖</div>
                <div class="mock-studio-item active">🌿 台積電與半導體供應鏈
                  <div style="font-size:0.7rem; color:var(--text-muted); padding-left:0.5rem;">
                    ├─ 先進製程 (3nm, EUV)
                    ├─ 先進封裝 (CoWoS)
                    ├─ 設計生態系 (OIP, EDA)
                    └─ 海外建廠進展 (亞利桑那, 熊本)
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "打破砂鍋｜大中小顆粒度三連問",
        vkThought: "主角是台積電，主線是它如何靠專業晶圓代工模式與先進製程技術成為全球晶片霸主。這裡我們透過設定角色，讓 AI 成為資深產業投資分析師，並依序送出大、中、小顆粒度提問，把台積電的護城河脈絡完全理清。",
        instructions: [
          "設定對話角色：點選對話框右上角「設定對話」 &rarr; 設定為「半導體產業與科技投資分析師，回覆較長且詳實」",
          "在對話框中，依序發送大、中、小顆粒度提問，並閱讀產出內容"
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
            「台積電的護城河不在單一的技術，而是『規模效應』與『信任』構成的良性循環：代工量愈大 &rarr; 良率庫存控制愈快 &rarr; 晶片成本降低 &rarr; 吸納更多大客戶 &rarr; 營收盈餘投入研發 &rarr; 技術領先。這個飛輪一旦轉起來，市佔率破 9 成，對手便難以望其項背。」</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫學習單與事實校正",
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
        stepTitle: "知識螺旋｜建立季度法說追蹤螺旋",
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
    track: "industry",
    steps: [
      {
        stepBadge: "Step 0",
        stepTitle: "初始化環境｜繁中設定與建立工作區",
        vkThought: "面板廠跨界封裝是極為前沿的工程管理案例。我們在 NotebookLM 做好繁體中文輸出設定，以利後續自動解讀大面積曝光與半導體封裝重疊的物理學術文獻。",
        instructions: [
          "登入 notebooklm.google.com",
          "點選右上角「設定」 &rarr; 選擇「輸出語言」為「中文 (繁體)」",
          "建立新筆記本，命名為「群創光電 (Innolux) FOPLP 先進封裝轉型研究」"
        ],
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">初始化完成後，系統會自動在讀取英文封裝標準（如 IEEE 論文）時，將大面積玻璃基板、熱膨脹係數 (CTE) 等難懂字詞，統一翻譯為精準的繁體中文學術語彙。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜用 Deep Research 建立起步報告",
        vkThought: "面板產業具有強烈的循環週期（面板雙雄的價格起落）。群創光電為了擺脫傳統 LCD 價格戰，大膽跨足半導體封裝。這一步我們先使用 Deep Research 收集全網關於群創 FOPLP 轉型的基本報告與起步來源。",
        instructions: [
          "點選左側「新增來源」 &rarr; 選擇「網路上搜尋」 &rarr; 切換至「Deep Research」模式",
          "複製下方起步 Prompt 貼入搜尋框",
          "等待 3 分鐘，AI 寫完的長篇報告與其引用的多個權威網址會自動匯入為 Sources"
        ],
        promptTemplate: `我想深入了解 [群創光電 (Innolux)] 近年在半導體封裝上的重大轉型。請幫我研究：
1. 群創傳統核心液晶面板業務與面臨的面板價格循環痛點
2. 什麼是「扇出型面板級封裝 (FOPLP)」？技術原理為何？
3. 面板廠為什麼空有龐大的舊世代面板廠房 (3.5代廠)？他們是怎麼把面板曝光設備與無塵室改造為半導體先進封裝線的？

請主要基於有深度分析、有具體數據的資料，不要放入只有基本介紹的短篇百科。請附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 群創液晶面板業務背景與痛點</h3>
            <p><strong>群創光電 (Innolux)</strong> 是全球液晶顯示面板（TFT-LCD）的龍頭大廠之一。受限於面板價格循環高資本、高波動的痛點，極易受競爭對手價格戰衝擊。為活化折舊完畢的舊世代面板廠房房舍與曝光設備，群創決定切入半導體先進封裝領域，研發方形玻璃基板 FOPLP 技術，尋求第二成長曲線。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "清理戰場｜篩選來源與手動補充",
        vkThought: "群創是如何化腐朽為神奇，將做面板的舊工廠改造成做半導體 AI 晶片先進封裝的基地？這一步我們清理戰場，剔除重複新聞，並手動上傳群創的法說會簡報（Investor Presentation）與國際半導體展上的 FOPLP 白皮書技術論文 PDF。",
        instructions: [
          "排除小於 500 字、缺乏數據的純股票評論網頁",
          "點選「新增來源」 &rarr; 選擇「上傳檔案」 &rarr; 上傳群創法說會報告 PDF 與大面積玻璃基板封裝的最新 IEEE 技術論文",
          "補充群創高層接受財經媒體專訪的影音 URL"
        ],
        promptTemplate: `無（本步驟為來源篩選與手動補充，無需發送 Prompt）`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在 Sources 列表中，確保勾選了上傳的 `Innolux_Investor_Meeting.pdf` 與半導體封裝論文。這能保證 AI 在接下來的術語整理與大中小提問中，能精準引用面板廠與先進封裝廠的物理參數。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "掃除障礙｜整理 FOPLP 核心術語",
        vkThought: "面板級封裝 (FOPLP) 橫跨了「面板顯示器」與「半導體封裝」兩個大產業，術語極多。這一步我們用 NotebookLM 整理術語對照表，尤其區分晶圓級 (WLP) 與面板級 (PLP) 的不同。",
        instructions: [
          "在對話框輸入下方 Prompt 要求整理 FOPLP 關鍵術語",
          "將生成的對照表儲存為記事，便於隨時查閱"
        ],
        promptTemplate: `針對 [群創轉型 FOPLP 面板級封裝] 領域，請幫我整理這些來源資料中的核心術語。

請找出 3 至 5 個常被一般人或媒體混淆的術語 (如 FOPLP, Glass Substrate, Warping, RDL)。

整理格式：
- 術語（英文原文）：一句話解釋這是什麼，並說明其在面板級先進封裝中的運作機制
- 如果有縮寫，請附上全稱`,
        outputContent: `
          <div class="output-card">
            <h3>群創 FOPLP 先進封裝術語表</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">面板級封裝 (FOPLP)</div>
                <div class="term-meta">Fan-out Panel-Level Packaging</div>
                <div class="term-desc">將晶片直接置於方形大面積基板（如 3.5 代面板玻璃）上封裝。一次封裝面積是 12 吋矽晶圓的 3-4 倍，能顯著降低先進封裝成本。</div>
              </div>
              <div class="term-card">
                <div class="term-word">玻璃基板 (Glass Substrate)</div>
                <div class="term-meta">封裝承載材料</div>
                <div class="term-desc">具備高平坦度、高剛性與優良高頻電學性能的玻璃板。用來取代圓形矽晶圓與傳統有機載板，作為高密度多晶片互連的基底。</div>
              </div>
              <div class="term-card">
                <div class="term-word">加熱翹曲 (Warping)</div>
                <div class="term-meta">物理製程挑戰</div>
                <div class="term-desc">在製程受熱時，大面積玻璃與封裝材料因熱膨脹係數 (CTE) 不匹配產生的物理彎曲。這會使黃光曝光對位精準度下降，是 FOPLP 最核心良率瓶頸。</div>
              </div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "全局觀照｜心智圖與資料結構導覽",
        vkThought: "利用 Studio 的心智圖工具快速看過。群創從面板跨足封裝，牽涉到與 IC 設計大廠（如 AMD、NVIDIA）、設備商、傳統封測廠的關係。我們展開心智圖分支，對其生態系地位建立直觀認識。",
        instructions: [
          "點擊右側 Studio 面板 &rarr; 點擊「心智圖 (Mind Map)」",
          "查看「群創光電」分支如何延伸到「FOPLP 技術」、「舊世代面板廠改裝」與「玻璃基板供應鏈」"
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
        stepTitle: "打破砂鍋｜大中小顆粒度三連問",
        vkThought: "主角是群創，主線是它如何利用舊面板廠房設備改造轉身為 FOPLP 封裝新星。我們在此步驟設定角色為科技產業分析師，依序詢問大、中、小顆粒問題，探討其轉型的商業可行性與技術爭議。",
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
        stepTitle: "知識內化｜填寫學習單與事實校正",
        vkThought: "透過自訂學習單，將資訊內化。請在下方填寫您對群創 FOPLP 轉型邏輯的理解，點擊驗證，系統會模擬 AI 指導教授為您查證，指出您是否忽略了玻璃翹曲等技術細節。",
        instructions: [
          "在下方輸入框中填入您對群創光電的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `my 理解是：
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
        stepTitle: "知識螺旋｜建立法說會追蹤螺旋",
        vkThought: "我們將「群創 FOPLP 轉型商業分析」存成筆記並轉成「來源」。當未來有群創最新一季法說會宣布打入某大 AI 晶片廠供應鏈或最新良率數據時，上傳資料，讓 AI 幫你比對，完成滾動式研究。",
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
  industry_blank: {
    title: "自訂產業與公司研究空白流程 (通用模板)",
    track: "industry",
    steps: [
      {
        stepBadge: "Step 0",
        stepTitle: "初始化環境｜繁中設定與建立工作區",
        vkThought: "開始任何新公司的產業研究時，第一步是在 NotebookLM 中先做好繁體中文輸出設定，能確保所有預設生成的對話內容、音訊摘要皆為高品質的繁中，加速後續解讀效率。",
        instructions: [
          "登入 notebooklm.google.com",
          "點選右上角「設定」圖示 &rarr; 選擇「輸出語言」為「中文 (繁體)」",
          "建立新筆記本，命名為「[自訂公司/產業] 深度研究筆記」"
        ],
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">語言初始化完成後，NotebookLM 會自動將所有的外文研報、英文財報數據，統一以流暢的繁體中文呈現，這對後續快速閱讀極有幫助。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜用 Deep Research 建立起步報告",
        vkThought: "完全陌生的公司，不要盲目去搜新聞。這一步我們使用 NotebookLM 的網路搜尋功能搭配 Deep Research 模式。輸入結構化的 Prompt，讓 AI 跑多輪搜尋，幫我們把該主題的核心業務、商業模式做成第一份「起步報告」，自動匯入為來源。",
        instructions: [
          "點選左側「新增來源」 &rarr; 選擇「網路上搜尋」 &rarr; 切換至「Deep Research」模式",
          "複製下方起步 Prompt 貼入搜尋框",
          "將括號中的 [公司/產業名稱] 替換成您自己的研究對象後發送"
        ],
        promptTemplate: `我想深入了解 [公司/產業名稱] 這家公司。請幫我研究：
1. 這家公司的核心業務和主要產品
2. 他們的商業模式（怎麼賺錢、誰是客戶）
3. 在產業中的競爭地位和主要競爭者
4. 創立背景和重要的發展轉折點
5. 近期的重大策略方向或財務新聞
6. 這家公司所處的產業基本運作方式（上中下游關係）

請主要基於有深度分析、有具體數據的資料，不要放入只有基本介紹的短篇百科。請附上資料來源連結。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">在網路上搜尋新來源時，切換到 <b>Deep Research 模式</b>。它會自動在後台進行多輪搜尋，篩選數十篇權威文獻，並直接將其彙整成一份報告，連同所有引用的來源網址自動匯入您的來源列表。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "清理戰場｜篩選來源與手動補充",
        vkThought: "Deep Research 抓取的網頁可能會有廣告或重複資訊。我們要「清理戰場」，移除無效網頁，並「手動補充」目標公司的官方財務報表、法說會簡報（Investor Relations Presentation）、以及高層接受專訪的 YouTube 影片，確保資料的絕對真實正確。",
        instructions: [
          "檢查來源列表，移除低品質或廣告內容網頁",
          "點選「新增來源」上傳官方「季報/年報 PDF」或「法說會 Presentation PDF」",
          "點選「新增來源」並貼上相關的 YouTube 影音連結"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">此時，Sources 列表中會包含網頁、PDF 以及 YouTube 視訊。NotebookLM 能將這些異質資料庫無縫整合，在回答時同時引用財報數據與影音逐字稿，這會讓我們的商業研究具有高度的交叉驗證力。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "掃除障礙｜整理核心技術與商業術語",
        vkThought: "每個公司都有其獨特的技術黑話與商業簡寫。這一步我們直接在 Chat 中提問，整理出最常出現的 3-5 個關鍵術語，儲存為記事放進 Studio，掃清後續障礙。",
        instructions: [
          "在主 Chat 框輸入下方 Prompt 發送",
          "在 AI 回覆卡片旁點擊「儲存為記事」，命名為「[自訂公司] 核心術語對照表」"
        ],
        promptTemplate: `請幫我整理這些來源資料中出現的 [你的主題] 相關核心技術與商業術語，包含英文原文和中文解釋。

整理格式：
- 術語（英文原文）：一句話解釋這是什麼，並說明其在該公司商業運作中的機制
- 特別標註在產業分析或投資研究中最常出現的關鍵字
- 如果有縮寫，請附上全稱

請按照「理解這個產業必須知道的」優先程度排序。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">將整理出來的術語存為記事 (Note) 放入 Studio 後，在後續對話中您可以隨時點選此記事，AI 將會以此術語定義為依據進行回答，確保資訊的一致性。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "全局觀照｜Studio 心智圖與音訊摘要",
        vkThought: "利用 Studio 的心智圖工具快速看過。它會自動把你的來源庫概念（如商業模式、產品、供應鏈、財務指標）視覺化串接起來，幫助您在大腦中建立全景架構。",
        instructions: [
          "打開右側 Studio 工作室面板",
          "點選「心智圖 (Mind Map)」並展開所有分支進行瀏覽",
          "點選「音訊摘要 (Audio Overview)」，生成雙人 Podcast，用聽覺快速吸收背景脈絡"
        ],
        promptTemplate: `無`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">點擊心智圖中的核心節點，AI 會即時在主視窗中為您解說該節點的文獻來源，免去手動輸入問題的時間。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "打破砂鍋｜大中小顆粒度三連問",
        vkThought: "主角是目標公司，主線是它如何賺錢與面臨的決策轉折。我們設定 AI 為資深科技產業分析師，依序詢問大、中、小顆粒度提問，把公司的護城河脈絡完全理清。",
        instructions: [
          "設定對話角色為「產業與科技投資分析師，回覆詳實較長」",
          "在對話框中，依序發送大、中、小顆粒度提問"
        ],
        promptTemplate: `[請依序複製以下三道問題至對話框中執行]

大顆粒｜主角是誰、怎麼起步：
從主角的角度切入 [公司/產業名稱]：
1. 主角是誰？創始背景與核心專長是什麼？
2. 最初是怎麼起步並進入這個領域的？
3. 在這個領域中，主角與其他競爭對手最大的差別與獨特優勢在哪裡？

中顆粒｜商業邏輯與轉折時刻：
針對 [公司/產業名稱] 的主角：
1. 它的商業邏輯是什麼？如何把資源、技術或服務轉化為營收？
2. 一路走到今天，面臨過哪些關鍵的轉折時刻？當時做出了什麼決定？
3. 這些決定在後來被證明是對的還是錯的？為什麼？

小顆粒｜用 30 秒講給朋友聽：
我要用 30 秒跟一個完全沒有科技或商業背景的朋友介紹 [公司/產業名稱] 最厲害的地方。
請幫我整理：
1. 一句話開場：用什麼有趣的鉤子（Hook）最能吸引人？
2. 三個核心重點：講哪三件事最能讓朋友抓到該公司的精髓與面臨的痛點？
3. 一句話收尾：留下什麼結論讓人記得？
請用口語化、說故事的語氣。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">分析師角色設定能驅使 AI 從「護城河 (Moat)」、「財務利潤率」、「供應鏈壟斷力」等硬派視角進行深入剖析，而非僅僅給出泛泛的公關稿式回答。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜填寫自訂學習單與驗證",
        vkThought: "看過不等於理解，我們必須試著回答核心問題。請在下方的學習單中寫下您對自訂公司/產業的商業模式理解，點擊驗證後，系統會事實查核並給予分析師優化建議。",
        instructions: [
          "在下方輸入框中填入您對該公司商業模式與競爭挑戰的回答",
          "點擊「模擬 AI 教授驗證」，獲取反饋"
        ],
        promptTemplate: `我的理解是：
[貼上您在學習單中填寫的公司回答]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於商業模式、市場佔有率或技術特徵
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 請輸入您的「研究公司/產業名稱」與「核心業務定義」：</label>
              <textarea id="industry_blank-q1" class="practice-input" placeholder="例如：NVIDIA (AI晶片設計商) / 蘋果公司 (智慧終端生態系) / 電動車產業..."></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. 核心商業邏輯 (這家公司是如何進行價值創造與賺取營收的)：</label>
              <textarea id="industry_blank-q2" class="practice-input" placeholder="請回答... (提示：核心產品線、利潤來源、客戶信任黏著方式)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 目前面臨的最大外部競爭挑戰或技術瓶頸是什麼？其護城河是什麼？</label>
              <textarea id="industry_blank-q3" class="practice-input" placeholder="請回答... (提示：市場飽和、新進入者威脅、技術換代風險、地緣政治影響)"></textarea>
            </div>
            <div class="practice-actions">
              <button class="btn-submit" onclick="simulateVerification('industry_blank')">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                模擬 AI 教授驗證
              </button>
              <button class="btn-secondary" onclick="fillDemoAnswers('industry_blank')">填入自訂範例回答</button>
            </div>
            <div id="industry_blank-sim-output" class="simulation-output">
              <div class="sim-header">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                NotebookLM 產業分析師實時反饋
              </div>
              <div id="industry_blank-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識螺旋｜滾動式季度與新聞追蹤",
        vkThought: "我們將「公司商業分析總結」存為記事並轉成「來源 (Notes)」。當該公司發布最新一季的財報法說會簡報時，上傳 PDF，發送對話讓 AI 比對最新毛利率與營收目標的變化，啟動滾動式螺旋追蹤。",
        instructions: [
          "在 NotebookLM 點擊「儲存為記事」，命名為「[公司名] 核心競爭力地圖」",
          "點擊記事右上角選單 &rarr; 選擇「轉成來源」",
          "當未來有最新一季法說會簡報或財經研究新消息時直接上傳，並使用下方 Prompt 進行分析比對"
        ],
        promptTemplate: `我上次關於此主題的研究總結筆記已經轉為來源（Notes）。現在我上傳了最新的 [新季度法說會/新財報 PDF]。

請幫我交叉比對並分析：
1. 最新季度財務數據 (毛利率、淨利、營收目標) 跟我上一季的總結筆記有何顯著變化？是否達到市場預期？
2. 在核心技術開發或關鍵產品線上，是否有宣布新的量產時程或客戶合作進度？
3. 有哪些新出現的地緣政治、供應鏈瓶頸或法律風險是我需要立即更新到舊知識庫中的？
4. 請幫我更新我的研究筆記。`,
        outputContent: `
          <div class="vk-thought-box" style="margin-top: 1rem;">
            <div class="vk-title">💡 介面操作引導</div>
            <p class="vk-desc">當您將「舊筆記」轉為「來源」後，AI 便能基於舊筆記與新財報進行深度比較，只為您標示出「新舊變化與偏離點」，節省您重新閱讀整份財報的時間。</p>
          </div>
        `
      }
    ]
  }
};

const caseConfig = {
  lean: {
    title: "學術理論分析案例",
    desc: "精實管理 4.0 (成大楊大和教授 JJC 模式)",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`
  },
  lppd: {
    title: "精實研發學術案例",
    desc: "精實產品與流程開發 (成大洪郁修教授 LPPD)",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
  },
  academic_blank: {
    title: "自訂學術空白流程",
    desc: "自定義學術理論/論文研究空白模板",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`
  },
  tsmc: {
    title: "標竿企業研究案例",
    desc: "台積電 (TSMC) 商業模式與護城河",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  innolux: {
    title: "產業轉型升級案例",
    desc: "群創 (Innolux) 面板級封裝 (FOPLP) 轉型",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2h0z"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></svg>`
  },
  industry_blank: {
    title: "自訂產業空白流程",
    desc: "自定義產業/公司/商業研究空白模板",
    icon: `<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`
  }
};

let currentTrack = 'academic';
let currentCase = 'lean';
let currentStepIdx = 0;

function switchTrack(trackName) {
  currentTrack = trackName;
  
  // Update Track button active states
  document.querySelectorAll('.btn-track').forEach(btn => {
    if (btn.dataset.track === trackName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update Case selector header text
  const header = document.getElementById('case-selector-header');
  if (trackName === 'academic') {
    header.innerText = '請選擇學術研究案例主題';
  } else {
    header.innerText = '請選擇產業與公司研究案例主題';
  }
  
  // Render case selector buttons for the track
  renderCaseButtons();
  
  // Select default case for the track
  const defaultCase = trackName === 'academic' ? 'lean' : 'tsmc';
  switchCase(defaultCase);
}

function renderCaseButtons() {
  const container = document.getElementById('case-buttons-container');
  container.innerHTML = '';
  
  // Get cases matching currentTrack
  const cases = Object.keys(workflowData).filter(key => workflowData[key].track === currentTrack);
  
  cases.forEach(key => {
    const config = caseConfig[key];
    const btn = document.createElement('button');
    btn.className = `btn-tab ${key === currentCase ? 'active' : ''}`;
    btn.dataset.case = key;
    btn.onclick = () => switchCase(key);
    
    btn.innerHTML = `
      ${config.icon}
      <div>
        <div style="font-size: 1.1rem; font-weight: 700;">${config.title}</div>
        <div style="font-size: 0.85rem; font-weight: 500; opacity: 0.8; margin-top: 0.2rem;">${config.desc}</div>
      </div>
    `;
    container.appendChild(btn);
  });
}

function switchCase(caseName) {
  currentCase = caseName;
  currentStepIdx = 0;
  
  // Update active state in Case Selector buttons
  document.querySelectorAll('#case-buttons-container .btn-tab').forEach(btn => {
    if (btn.dataset.case === caseName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Render Step Nav and Content
  renderStepNav();
  renderStepContent();
  
  // Smooth scroll to step card top
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
      <div class="step-num">${step.stepBadge.replace("Step ", "")}</div>
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
  
  // Smooth scroll to step card top
  const container = document.getElementById('step-content-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderStepContent() {
  const step = workflowData[currentCase].steps[currentStepIdx];
  const container = document.getElementById('step-content-container');
  
  // Fade-in animation reset
  container.classList.remove('fade-in');
  void container.offsetWidth; // Trigger reflow
  container.classList.add('fade-in');
  
  // Construct instructions
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
  } else if (caseName === 'lppd') {
    document.getElementById('lppd-q1').value = "精實研發 (LPPD) 旨在將精實思維導入設計研發階段。有別於傳統『點式設計』（鎖定單一方案並不斷修改），它採用『套式同步工程 (SBCE)』，在開發初期同時保留多個可行方案，經過持續測試與驗證後，才逐步收斂並淘汰劣勢方案，大幅降低重工風險。";
    document.getElementById('lppd-q2').value = "大部屋 (Obeya) 是一個跨部門協作的視覺化空間，透過在牆上或看板上展示進度、問題與數據，打破職能隔閡進行即時決策。A3 報告則是一種在一張 A3 紙張上以結構化邏輯（如現況、根因、對策）精準呈現問題解決與經驗傳承的溝通工具。";
    document.getElementById('lppd-q3').value = "LAMDA 循環是知識工作者的學習引擎。包含：Look (親臨現場觀察實況)、Ask (深入追問問題根因)、Model (建立視覺化或實體模型解釋)、Discuss (與利害關係人對話討論)、Act (採取行動並進行下一次循環)。它能促成開發過程中的快速學習與知識累積。";
  } else if (caseName === 'tsmc') {
    document.getElementById('tsmc-q1').value = "台積電的核心主角是專業晶圓代工 (Pure-Play Foundry) 商業模式。張忠謀創立台積電並堅守『不與客戶競爭』的核心理念，替全球晶片設計公司代工製造晶圓，開啟了半導體專業分工時代。";
    document.getElementById('tsmc-q2').value = "其護城河飛輪為：代工規模愈大 &rarr; 良率與製程演進愈快 &rarr; 吸引更多客戶與利潤 &rarr; 投入更多先進研發與設備 (如 EUV、CoWoS Advanced Packaging) 保持霸主地位，並透過開放創新平台 (OIP) 綁定客戶生態系。";
    document.getElementById('tsmc-q3').value = "海外建廠面臨極大的跨國工程管理、高建廠成本與工會文化衝突。去台化雖然是地緣政治焦點，但由於台灣擁有極高的工程師人力彈性與完整的材料聚落，核心研發與主力生產仍將留在台灣。";
  } else if (caseName === 'innolux') {
    document.getElementById('innolux-q1').value = "群創光電主要動機是為了擺脫傳統 LCD 面板劇烈的景氣價格循環（面板雙雄的價格戰）。透過活化已經折舊完畢的舊世代面板廠房房舍與曝光設備，跨界轉型切入半導體封裝。";
    document.getElementById('innolux-q2').value = "群創的扇出型面板級封裝 (FOPLP) 利用方形玻璃基板封裝，相比台積電的 12 吋圓形矽晶圓，方形面積利用率大於 95%，一次可封裝的晶片數量是圓形矽晶圓的 3 至 4 倍，大幅降低先進封裝成本。";
    document.getElementById('innolux-q3').value = "目前面臨的最大物理製程挑戰是『大面積玻璃基板加熱翹曲 (Warping)』、高密度線路的對位精準度，以及在舊面板廠無塵室環境中維持半導體等級的高良率控制。";
  } else if (caseName === 'academic_blank') {
    document.getElementById('academic_blank-q1').value = "依附關係理論 (Attachment Theory) / 焦慮型依附、安全型依附";
    document.getElementById('academic_blank-q2').value = "人類個體在早期與主要照顧者建立的互動經驗，會形塑其內在運作模式，進而影響其成年後的親密關係建立、情緒調節與安全感認知。";
    document.getElementById('academic_blank-q3').value = "常被與日常的『黏人』或『冷淡』混淆。日常以為黏人就是依附關係差，但學術上焦慮型依附是由於早期照顧者的不一致性反應造成的內在焦慮，是個體的情緒適應機制，而非單純的性格缺點。";
  } else if (caseName === 'industry_blank') {
    document.getElementById('industry_blank-q1').value = "英特爾 (Intel) / 半導體垂直整合製造 (IDM)";
    document.getElementById('industry_blank-q2').value = "自行設計晶片，自行擁有先進晶圓製造廠，並自行封裝銷售給電腦與伺服器市場。主要透過銷售利潤率極高的 PC/伺服器 CPU 賺錢。";
    document.getElementById('industry_blank-q3').value = "面臨台積電代工生態系的先進製程超越（3nm對18A的競爭），以及旗下代工業務與晶片設計業務左右互搏的信任考驗。其護城河是龐大的 x86 軟體生態系與伺服器專有架構，但正被 ARM 架構與晶圓代工廠蠶食。";
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
    } else if (caseName === 'lppd') {
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 事實正確性檢查 (Fact-Check)</div>
          <p>您的理解非常精準！正確指出了 SBCE、Obeya 與 A3 報告的運作核心，尤其是點式設計與套式同步工程的對比，完全符合 Liker & Morgan 關於 LPPD 的學術定義，LAMDA 學習步驟也敘述無誤。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (LPPD Suggestion)</div>
          <p>在討論 LAMDA 循環時，可以進一步連結到<strong>『知識重用性 (Knowledge Reusability)』</strong>的觀念。精實研發的核心不僅在於完成單次產品開發，更是要把 LAMDA 學習到的經驗轉化為『貿易卡 (Trade-off curves)』或『標準設計限制圖表』，供未來的專案直接套用，這能讓您的學術論點更加完備。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 文獻與實證研究引用</div>
          <p>可精確引用自 <em>Morgan, J. M., & Liker, J. K. (2020) The Toyota Product Development System</em>，以及洪郁修教授在台灣機械業輔導 LPPD 轉型時提出的『跨部門視覺化大部屋實證研究 <em>(Hung et al., 2023, Design Studies)</em>』。</p>
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
    } else if (caseName === 'academic_blank') {
      const topicName = q1Val.split('/')[0].trim();
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 自訂主題結構檢查 (Concept Check)</div>
          <p>您輸入的自訂學術研究主題是 <strong>『${topicName}』</strong>。您的核心命題回答邏輯完整，針對該理論如何試圖解決核心痛點、提出什麼假設，都有清楚的脈絡說明。</p>
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
    } else if (caseName === 'industry_blank') {
      const topicName = q1Val.split('/')[0].trim();
      contentDiv.innerHTML = `
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--success);">✅ 自訂商業主題結構檢查 (Business Check)</div>
          <p>您輸入的自訂產業/公司研究主題是 <strong>『${topicName}』</strong>。您的商業模式回答清晰，抓住了其核心的價值創造與主要客戶流。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--warning);">⚠️ 建議深化之處 (Moat Analysis Suggestion)</div>
          <p>針對該公司的核心壁壘，建議在報告中更加細化其<strong>『高轉換成本 (Switching Costs)』</strong>或<strong>『無形資產 (Intangible Assets, 如專利與品牌)』</strong>。特別是在面對新技術換代風險時，分析其資本開支佔營收比重，能更精準判斷該護城河的防禦寬度。</p>
        </div>
        <div class="sim-point">
          <div class="sim-point-title" style="color:var(--secondary);">📖 產業文獻檢索提示</div>
          <p>建議上傳該公司近 3 年的『年報 (Form 10-K / Annual Report)』，特別聚焦在「風險因素 (Risk Factors)」一節，這能為您的競爭與瓶頸分析提供最權威的資料基礎。</p>
        </div>
      `;
    }
  }, 1500);
}

// Initial setup on load
window.onload = () => {
  switchTrack('academic');
};
