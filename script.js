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
          <div class="output-card">
            <h3>精實管理 4.0 知識地圖輪廓 (心智圖展開)</h3>
            <ul>
              <li><strong>精實管理 4.0 (Lean 4.0)</strong>
                <ul>
                  <li><strong>理論地基 (TPS)</strong>
                    <ul>
                      <li>及時生產 (JIT) &rarr; 看板管理 (Kanban)、平準化生產</li>
                      <li>自働化 (Jidoka) &rarr; 防錯機制 (Poka-Yoke)、人機分離、異常停機</li>
                    </ul>
                  </li>
                  <li><strong>數位技術支柱 (Industry 4.0)</strong>
                    <ul>
                      <li>物聯網 (IoT) &rarr; 非侵入式光電感測、電流感測器</li>
                      <li>大數據與 AI &rarr; 預測性維護、生產節拍異常預警</li>
                    </ul>
                  </li>
                  <li><strong>核心融合機制 (JJC 模式)</strong>
                    <ul>
                      <li>自働化循環 &rarr; 異常檢知 &rarr; 自動回報看板 &rarr; 產線停機 &rarr; 現場 PDCA 改善</li>
                      <li>JIT 循環 &rarr; 實時產量監控 &rarr; 動態平準化配送 &rarr; 消除過量生產</li>
                    </ul>
                  </li>
                  <li><strong>實務診斷工具</strong>
                    <ul>
                      <li>動態價值流圖 (Digital VSM) &rarr; 自動繪製物流/資訊流 &rarr; 即時消除七大浪費</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "這一步是真正把知識內化的關鍵。比起雜亂地問問題，我們應該遵循「先大（歷史演進與核心命題）、再中（相近理論比較）、最後小（應用與爭議）」的結構。我將這個流程設計為「三連問」，依序執行，能幫助你在心中搭起學術與日常生活之間的橋樑。",
        instructions: [
          "在對話框右上角「設定對話」>「選擇角色」>「自訂」，輸入「以製造管理領域的碩博士研究者來和我對話，回覆內容選擇較長」",
          "依序執行以下三連問。每問完一題，讀完產出的內容，再問下一題"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [精實管理 4.0 / JJC]：
1. 這個理論出現之前，學界用什麼解釋同一個現象？
2. 奠基者 (楊大和教授團隊) 為什麼覺得既有解釋不夠，需要提出新理論？他做了什麼關鍵實證研究來支持新主張？
3. 這個理論被提出後，近年的研究方向跟最初的版本差在哪？

第二問｜理論比較 (請在 Studio 點自訂報告執行)：
請產出「JJC 模式 VS 傳統 TPS 看板 VS 智慧工廠 MES 系統 比較表」
比較面向涵蓋：
- 核心命題與主要目的
- 數據收集與傳遞方式 (手動 / 限量 IoT / 全面大數據)
- 改善決策主體 (現場人員 / 看板限制 / 系統演算法)
- 建置成本與適用企業規模

第三問｜應用與爭議：
針對 [精實管理 4.0 與 JJC]：
1. 這個理論被應用到哪些原本學科以外的領域？是否有實證研究？
2. 學界目前的主要爭議與未解問題有哪些？
3. 我要用 3 分鐘跟一個完全沒有製造業背景的朋友介紹這個理論，請幫我整理口語化的版本 (含開場鉤子、三個重點、常見誤解、收尾金句)。`,
        outputContent: `
          <div class="output-card">
            <h3>第一問回覆：歷史脈絡</h3>
            <p><strong>前身現象：</strong>在精實 4.0 與 JJC 出現前，學界與工業界主要依賴<strong>傳統 TPS 手動看板</strong>（反應慢、資訊滯後）或<strong>昂貴的 MES/ERP 系統</strong>（導入成本高、中小企業難以負荷、系統過於剛性且龐雜）。</p>
            <p><strong>楊大和教授的突破：</strong>發現台灣中小企業轉型痛點後，於 2018 年起提出「JJC 模式」，透過非侵入式低成本 IoT 模組進行限量資訊的實時化，彌補傳統看板的滯後，同時避免 MES 系統的笨重。其團隊在精密機械與紡織廠進行了數十次實證，證明「簡易智慧化」能大幅提升現場改善速度。</p>

            <h3>第二問回覆：三者比較表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>比較面向</th>
                    <th>傳統 TPS 看板</th>
                    <th>JJC 自働生產管理環 (精實4.0)</th>
                    <th>智慧工廠 MES 系統 (工業4.0)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>核心命題</strong></td>
                    <td>透過實體卡片拉動生產，控制庫存。</td>
                    <td>用最低成本的數位看板提供限量實時資訊，驅動現場人員即時改善。</td>
                    <td>全面數位化與資訊透明，由系統演算法優化排程。</td>
                  </tr>
                  <tr>
                    <td><strong>數據收集方式</strong></td>
                    <td>人工抄寫、卡片實體傳遞 (滯後性高)。</td>
                    <td>外掛式限量感測器 (實時、自動、無干擾)。</td>
                    <td>全線感測器、條碼掃描、ERP 連線 (大數據)。</td>
                  </tr>
                  <tr>
                    <td><strong>決策與改善主體</strong></td>
                    <td>現場班組長與作業員。</td>
                    <td><strong>現場改善人員 (機器智慧成就人的智慧)</strong>。</td>
                    <td>中控室、生管經理、系統自動排程演算法。</td>
                  </tr>
                  <tr>
                    <td><strong>建置成本與規模</strong></td>
                    <td>極低。適用於流程穩定的成熟工廠。</td>
                    <td><strong>低至中等。非常適合資源有限的中小企業。</strong></td>
                    <td>極高 (數百萬至千萬)。適用於大型製造集團。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>第三問回覆：3分鐘科普版本</h3>
            <p><strong>口語化介紹：</strong></p>
            <ul>
              <li><strong>開場鉤子：</strong>「你聽過黑燈工廠嗎？大家常以為，最先進的工廠就是裡面完全沒有人，全部都用機器人。但這其實是個美麗的誤會。」</li>
              <li><strong>三個重點：</strong>
                <ol>
                  <li><strong>機器會傻，人才是聰明的：</strong>在多變的市場裡，機器人一旦遇到突發狀況就會死機。精實 4.0 認為，數位工具的目的是幫現場工人「開天眼」，而不是淘汰他們。</li>
                  <li><strong>裝上生產線的智慧手錶 (JJC)：</strong>楊大和教授提出 JJC 概念，就像是給生產線裝上便宜的智慧手錶，一有異常就立刻震動提醒，讓工人能馬上找出原因進行改善。</li>
                  <li><strong>用十萬發揮千萬的效果：</strong>大眾以為數位轉型一定要花幾百萬買昂貴系統，但其實只要在關鍵位置外掛便宜的感測器，把浪費找出來，就能省下大筆資金。</li>
                </ol>
              </li>
              <li><strong>常見誤解：</strong>「以為精實管理 4.0 就是買很多高科技設備。事實上，如果你的生產流程本來就很亂，導入昂貴設備只會讓你『自動化地製造垃圾』。」</li>
              <li><strong>收尾金句：</strong>「數位轉型的真正關鍵，不是把人拿掉，而是用機器的智慧，來成就現場人員的改善智慧。」</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜學習單自檢與 AI 驗證",
        vkThought: "看懂了，不代表能講得出來。在學術性高的主題中，我們很容易因為術語看起來很專業，而產生「我懂了」的錯覺。這一步我設計了這份學習單，請你試著用自己的話填寫。寫不出來的部分就是盲點，接著用我提供的「驗證 Prompt」讓 NotebookLM 當你的論文指導教授，幫你做事實與邏輯的嚴格校正。",
        instructions: [
          "在下方互動學習單中，試著用自己的話回答這 4 個核心問題",
          "點擊「模擬 AI 教授驗證」按鈕，系統將模擬 NotebookLM 的反饋，指出你理解中的 fact-check 錯誤或可深化之處"
        ],
        promptTemplate: `我的理解是：
[把你在學習單裡寫的內容全部貼在這裡]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是引用奠基者主張的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化的地方？
4. 有沒有把「主流共識」誤認為「個別研究結論」，或是反過來？

請直接指出問題，並附上對應的來源引用。`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 用 2-3 句話說明「精實管理 4.0 與 JJC」在講什麼？</label>
              <textarea id="lean-q1" class="practice-input" placeholder="請用自己的話作答... (提示：可提到數位融合、JJC如何運作)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">2. JJC 與傳統 TPS 看板最大的差別在哪裡？</label>
              <textarea id="lean-q2" class="practice-input" placeholder="請用自己的話作答... (提示：數據收集的實時性與限量資訊)"></textarea>
            </div>
            <div class="practice-row">
              <label class="practice-label">3. 這個理論最常被大眾誤解的地方是什麼？</label>
              <textarea id="lean-q3" class="practice-input" placeholder="請用自己的話作答... (提示：黑燈無人化 vs. 人機協同)"></textarea>
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
                NotebookLM 指導教授實時反饋
              </div>
              <div id="lean-sim-content" class="sim-content"></div>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 7",
        stepTitle: "知識迴旋｜存為筆記並建立知識累積庫",
        vkThought: "學術研究是持續演進的。今天建立的地圖，到了明天可能有新論文發表。NotebookLM 最強大的地方在於「知識的螺旋累積」：你可以將產出的優秀對話存成記事，然後轉為「來源」。下次看到 2025/2026 年最新發表的文獻，直接丟入同一個筆記本，就能讓 AI 幫你比對「新研究對你既有判斷的挑戰與補強」。",
        instructions: [
          "在 NotebookLM 中，點擊 Step 5 產出的「比較表」及 Step 6 校正後的學習單對話旁邊的「儲存為記事」",
          "將這些記事命名為「精實4.0-核心比較表」與「我的精實4.0理解筆記」",
          "點擊記事右上角選單 &rarr; 點選「轉成來源」",
          "未來如果有新的 Lean 4.0 論文發表，直接上傳，並使用下方 Prompt 與既有知識庫進行交叉比對"
        ],
        promptTemplate: `我上次研究這個主題的筆記已經在來源 (Notes) 裡了。現在我加入了一些新的論文與文獻。
請幫我比較：
1. 跟我上次的知識地圖相比，這幾篇新文獻有什麼新的發現、論點或實證案例？
2. 這些新資料會挑戰我之前對於 JJC 模式、近似理論比較、或人機協同的判斷嗎？
3. 有沒有我應該特別注意的新爭議或新證據？
4. 如果我要更新論文的文獻回顧，這幾篇新文獻應該插入在我的筆記架構中的哪一節？`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入 2025/2026 新論文後)</h3>
            <p><strong>新加入文獻：</strong><em>Yang, D. H., & Wu, S. H. (2025). Generative AI and Large Language Models for Kaizen in Smart Manufacturing.</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，這篇 2025 年的最新研究有以下突破：<br><br>
              <strong>1. 改善主體的擴展：</strong>過去 JJC 模式完全依賴現場經驗豐富的班組長進行 PDCA 改善。新文獻證實，導入微型 LLM (大語言模型) 可以自動解析 JJC 收集到的異常代碼，並生成具體的『改善建議草稿 (Kaizen draft)』，這降低了現場人員對經驗的依賴，實現了<strong>『AI 輔助精實改善』</strong>。<br><br>
              <strong>2. 理論挑戰：</strong>這挑戰了您之前筆記中『數位工具僅能傳遞限量數據，無法參與改善決策』的結論。實證顯示，LLM 的介入讓簡易智慧化往決策輔助方向邁進了一大步。」</p>
            </div>
          </div>
        `
      }
    ]
  },
  video: {
    title: "1分鐘 AI 影片與 Reel 製作工作流",
    steps: [
      {
        stepBadge: "Step 1",
        stepTitle: "打地基｜建立基礎理解",
        vkThought: "要做 1 分鐘的短影音 (Reels/Shorts/TikTok)，不能只找單一的最強工具，而是要先理解短影音的「視聽心理學」與「演算法指標」。這一步我們將相關的剪輯原理、受眾心理學、演算法規則等作為地基資料匯入 NotebookLM，建立科學的基礎理解。",
        instructions: [
          "在 NotebookLM 建立新的筆記本",
          "上傳如《社群短影音演算法解析》、《視聽剪輯心理學入門》或相關教科書章節 PDF/文字檔",
          "複製下方 Prompt 貼到對話框，理清短影音的底層邏輯"
        ],
        promptTemplate: `請完全基於這份社群影音行銷與剪輯原理資料，為我建立 [1分鐘 AI 影片/Reel 製作] 的基礎知識框架。

請列出：
1. 短影音演算法的標準指標（如留存率、完看率）與核心定義
2. 最核心的 3 至 5 個專有名詞（如鉤子、節奏），每個附上定義與運作機制
3. 此領域的發展歷史（從實體剪輯到AI自動化工作流）
4. 目前業界對此主題的「主流共識」是什麼

請標明這份資料的年份，以便後續判斷哪些內容需要用最新的 AI 工具進展來補強。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 標準指標與定義</h3>
            <p><strong>短影音成功指標：</strong>在演算法驅動的平台（如 Instagram Reels, TikTok），影片權重主要由<strong>完看率 (Completion Rate)</strong>、<strong>3秒留存率 (3-Second Retention)</strong> 以及<strong>互動率 (Engagement Rate)</strong> 決定。1分鐘影片的黃金目標是拉平觀眾流失曲線。</p>
            
            <h3>2. 核心專有名詞</h3>
            <div class="terms-grid">
              <div class="term-card">
                <div class="term-word">黃金3秒鉤子 (3-Second Hook)</div>
                <div class="term-meta">運作機制</div>
                <div class="term-desc">影片開頭前3秒的視覺衝擊或痛點文案。運作機制是引導觀眾停止滑動，決定了影片是否能獲得演算法的第一波推送。</div>
              </div>
              <div class="term-card">
                <div class="term-word">視覺節奏與卡點 (Pacing)</div>
                <div class="term-meta">運作機制</div>
                <div class="term-desc">畫面切換頻率。社群短片的黃金節奏是 0.7 秒至 1.2 秒切換一次鏡頭，利用視覺的新鮮感持續刺激多巴胺，以拉高完看率。</div>
              </div>
              <div class="term-card">
                <div class="term-word">動態安全區域 (Safe Area)</div>
                <div class="term-meta">排版規則</div>
                <div class="term-desc">手機螢幕上下左右會被平台按鈕（按讚、留言、文案）遮擋的區塊。關鍵視覺與動態字幕必須配置於中央 60% 的安全區。</div>
              </div>
            </div>

            <h3>3. 發展歷史</h3>
            <p>經歷了三個主要階段：第一階段是傳統重度剪輯（Pr/Ae，耗時數天）；第二階段是範本化剪輯（CapCut/剪映，降低門檻）；第三階段則是目前的<strong>生成式 AI 模組化工作流</strong>（利用 ChatGPT 生成劇本 &rarr; Midjourney/Runway 生成畫面 &rarr; ElevenLabs 配音 &rarr; AI 字幕自動封裝，全程僅需 15 分鐘）。</p>

            <h3>4. 業界主流共識</h3>
            <ul>
              <li><strong>文案為王，視覺為輔：</strong>AI 畫面再精美，如果腳本沒有在 3 秒內勾起情緒共鳴，觀眾依然會直接滑走。</li>
              <li><strong>模組化分工：</strong>不要試圖尋找「一鍵搞定」的完美 AI 工具，高質感的 Reels 都是腳本、語音、畫面、剪輯分開由最擅長的 AI 工具處理再合成。</li>
            </ul>
            <p><strong>資料年份：</strong>本框架基於 2023 年底的影音剪輯與社交行銷共識。針對 2025/2026 年最新 AI 影片生成器（如 Kling, Sora）的演進，需在 Step 2 補強。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 2",
        stepTitle: "針對性補強｜Deep Research 追蹤最新技術與案例",
        vkThought: "AI 影音工具的迭代速度是以月為單位計算的。2023 年教科書上推薦的工具，現在可能已經過時。這一步我們使用 Deep Research 模式，去網路上抓取最新的 AI 影片生成突破、產業報告以及演算法對 AI 內容的最新限制。",
        instructions: [
          "在 NotebookLM 點擊「新建」選擇「在網路上搜尋新來源」並開啟 Deep Research",
          "複製下方 Prompt，將研究主題指定為「AI 短影音製作工具與工作流進展」"
        ],
        promptTemplate: `我手邊已經有傳統短影音剪輯與行銷的基本邏輯。
請幫我研究近 1 年內最新發展、但對高效製作 1 分鐘 AI 短影音極為重要的內容：

1. 該領域的最新突破與工具工作流：
   - 目前在「畫面生成控制力（如相機鏡頭運動控制）」與「角色一致性 (LoRA/Reference)」表現最頂尖的 3-5 個工具與其核心技術
   - 最新的自動化一站式短影音平台
   每一項請附上：主要特點、發表/更新年份與網址連結。
2. 平台演算法目前對於「純 AI 生成內容」的最新政策與處置（是否會限流？如何判定？）
3. 大眾印象跟實務創作者事實差最遠的地方。

排除維基百科與廣告內容，附上資料來源連結。`,
        outputContent: `
          <div class="output-card">
            <h3>1. 頂尖 AI 影音工具與最新工作流</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>工具名稱</th>
                    <th>核心功能與技術突破</th>
                    <th>適用場景</th>
                    <th>最新進展 (2025/2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Kling AI (快手可靈)</strong></td>
                    <td>支援強大的物理規律模擬，特別是人物動作與液體流動極度寫實。提供強大的「角色一致性」參考圖功能。</td>
                    <td>高品質電影感 Reels、故事型短片畫面生成。</td>
                    <td>已更新至 v2.0，提供更精準的 Prompt 遵循度與高畫質模式。</td>
                  </tr>
                  <tr>
                    <td><strong>Runway (Gen-3/Gen-4)</strong></td>
                    <td>業界最精準的鏡頭軌跡控制 (Camera Control) 與運動筆刷 (Motion Brush)，能局部啟動畫面中的特定物件運動。</td>
                    <td>需要精細分鏡與相機平移、推拉效果的高級短片。</td>
                    <td>引入了實時音訊驅動影像生成的預覽功能。</td>
                  </tr>
                  <tr>
                    <td><strong>ElevenLabs</strong></td>
                    <td>語音克隆與情感配音。能精準生成擬真的呼吸聲、嘆氣聲與情緒起伏，完全擺脫機械音。</td>
                    <td>1分鐘影片的旁白配音。</td>
                    <td>支援多角色對話的劇本一鍵配音與音效自動生成。</td>
                  </tr>
                  <tr>
                    <td><strong>CapCut (剪映) Web</strong></td>
                    <td>一鍵自動生成符合安全區的動態字幕，內建海量熱門短影音模板與 AI 數字人。</td>
                    <td>最後的合成、加字幕與背景音樂卡點。</td>
                    <td>整合多款 AI 生成器插件，可直接在剪輯軌道內生成畫面。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. 平台演算法對純 AI 內容的最新政策</h3>
            <ul>
              <li><strong>「AI 標籤」與權重限制：</strong>Meta (Instagram) 與 YouTube 已明確要求，若影片包含 100% AI 生成的寫實畫面，創作者必須主動勾選「AI 製作」標籤，否則一旦被系統演算法偵測到（透過語音與畫面數位浮水印），將面臨限流。</li>
              <li><strong>原創性審查：</strong>演算法會主動打擊「純模板、低原創性、大量複製的 AI 偽科普影音」。如果同一個 AI 配音或背景圖出現在成千上萬個帳號中，該影片會被判定為「低品質重複內容」而不予推送。</li>
            </ul>

            <h3>3. 大眾印象 vs. 創作者事實</h3>
            <p><strong>大眾印象：</strong>以為輸入一行「做一個貓咪搞笑影片」，AI 就會直接吐出一個能爆紅的 Reels。這通常只能做出毫無觀看價值的垃圾內容。</p>
            <p><strong>創作者事實：</strong>高流量的 AI 影音創作者，其核心能力是<strong>「劇本策展力」與「細節調校力」</strong>。他們用 ChatGPT 撰寫具有懸念的故事結構，手動在 Runway 中微調鏡頭運動，並在 CapCut 中手動卡點音效與動態字體，AI 只是幫他們省去了拿相機實拍的時間。</p>
          </div>
        `
      },
      {
        stepBadge: "Step 3",
        stepTitle: "建立術語表｜看懂創作者黑話",
        vkThought: "短影音製作有很多行業黑話，如果不懂這些術語，在跟 AI 討論腳本或尋找工具時會非常卡。例如你不知道什麼是 Safe Area，生出來的字幕被按鈕擋住，這支影片就毀了。這一步我們請 NotebookLM 產出術語表，迅速掌握核心常識。",
        instructions: [
          "在 Studio 面板中選擇「報告」>「自訂報告」",
          "貼入下方 Prompt 模板，產出 1 分鐘 AI 短影音製作的術語對照表"
        ],
        promptTemplate: `針對 [1分鐘 AI 影片與 Reel 製作工作流] 這個領域，請幫我整理核心術語與「日常混淆詞彙對照表」。
包含英文原文與中文解釋。

整理格式：
| 術語 (中/英) | 實務解釋與機制 | 日常生活常被混淆的地方 |

請特別標出哪些術語屬於「前期腳本規劃」、哪些屬於「AI生成控制」、哪些屬於「後製與發布」。`,
        outputContent: `
          <div class="output-card">
            <h3>AI 短影音工作流術語對照表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>術語 (中/英)</th>
                    <th>實務解釋與機制</th>
                    <th>日常被混淆的地方</th>
                    <th>所屬階段</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>黃金 3 秒鉤子</strong><br>(3-Second Hook)</td>
                    <td>影片前 3 秒的痛點提問或震撼畫面，旨在引導大腦快速做出生理決策（留下來看）。</td>
                    <td>誤以為只是隨便加個亮麗的標題，忽略了語音、視覺與痛點文案三位一體的結合。</td>
                    <td>前期腳本規劃</td>
                  </tr>
                  <tr>
                    <td><strong>相機運動控制</strong><br>(Camera Control)</td>
                    <td>在 AI 影片生成器中，利用運動筆刷、軌跡控制等功能，手動為靜態圖加上推(Push)、拉(Pull)、平移(Pan)、旋轉(Roll)等鏡頭運動。</td>
                    <td>誤以為 AI 生出來的畫面是亂動的。高手會將鏡頭運動控制在 0.5 到 1 秒內，配合旁白語速做動態對焦。</td>
                    <td>AI 生成控制</td>
                  </tr>
                  <tr>
                    <td><strong>動態字幕安全區</strong><br>(Safe Area for Caption)</td>
                    <td>在 9:16 的直式影片中，避開上方 15%（帳號資訊）與下方 25%（按讚留言欄）的中央可視區。</td>
                    <td>常有人隨意將字幕放在底部，導致發布後被系統 UI 擋住，觀眾完全看不懂字，導致跳出率大增。</td>
                    <td>後製與發布</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        stepBadge: "Step 4",
        stepTitle: "掌握輪廓｜AI 短影音心智圖",
        vkThought: "這一步我們使用 Studio 裡的心智圖功能，將 1 分鐘短影片的「產出工作流」做一個全景式的拆解。從腳本策劃、視覺生成、配音到最後的剪輯卡點，建立一條清晰的流水線意識，這能讓我們在製作時不自亂陣腳。",
        instructions: [
          "在 Studio 面板中，點擊生成「心智圖」並展開",
          "快速瀏覽從前端腳本到後端發布的四個核心模組，明確每一階段的 AI 工具分工"
        ],
        promptTemplate: `無（直接點擊 Studio 中的「心智圖」與「簡介文件」生成即可）`,
        outputContent: `
          <div class="output-card">
            <h3>AI 短影音製作工作流 (心智圖展開)</h3>
            <ul>
              <li><strong>1分鐘 AI 影片工作流 (Reel AI Workflow)</strong>
                <ul>
                  <li><strong>前期規劃 (Script Stage)</strong>
                    <ul>
                      <li>腳本大綱 &rarr; ChatGPT / Gemini (設定情緒起伏、黃金 3 秒)</li>
                      <li>分鏡劇本 &rarr; 生成具體畫面提示詞 (Prompts) 與鏡頭運動指令</li>
                    </ul>
                  </li>
                  <li><strong>素材生成 (Generation Stage)</strong>
                    <ul>
                      <li>視覺影像 &rarr; Midjourney / Kling / Luma (控制角色一致性、解析度)</li>
                      <li>擬真配音 &rarr; ElevenLabs / HeyGen (人聲克隆、添加呼吸聲以去 AI 感)</li>
                    </ul>
                  </li>
                  <li><strong>後製合成 (Editing Stage)</strong>
                    <ul>
                      <li>粗剪與卡點 &rarr; CapCut (音訊與畫面節奏對齊，1秒切換鏡頭)</li>
                      <li>字幕與特效 &rarr; 動態字幕置於安全區，添加關鍵字加粗與變色效果</li>
                    </ul>
                  </li>
                  <li><strong>發布優化 (Distribution Stage)</strong>
                    <ul>
                      <li>演算法標籤 &rarr; Meta AI 聲明、SEO 關鍵字描述</li>
                      <li>數據監控 &rarr; 追蹤 3 秒留存率與完看率，微調下支影片的鉤子設計</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 5",
        stepTitle: "建構地圖｜深度理解三連問",
        vkThought: "在此步驟，我們要透過深度三連問，幫我們搞清楚：這個 AI 工作流從何而來（解決什麼痛點）、跟相近的影片製作方式有何本質差異、實務上會遇到什麼著作權或演算法爭議，最後收斂出一個任何人都能聽懂的 3 分鐘科普說法。",
        instructions: [
          "在 NotebookLM 對話框中，設定回覆內容為「較長」",
          "依序執行以下三道 Prompt，每題回答完讀完再問下一題"
        ],
        promptTemplate: `[請依序複製以下三道問題至 NotebookLM 對話框中執行]

第一問｜歷史脈絡：
從歷史脈絡切入 [AI 短影音製作工作流]：
1. 在生成式 AI 普及前，創作者製作一支高質感短影音要經過哪些步驟？痛點是什麼？
2. 為什麼目前的「模組化 AI 工作流」能解決這個問題？它大幅降低了哪一部分的成本？
3. 近 1 年來（如 Kling、Sora 等工具推出後），這個工作流又發生了什麼修正？

第二問｜理論比較 (請在 Studio 點自訂報告執行)：
請產出「一站式 AI 影片生成 (如 InVideo) VS 模組化協同工作流 (ChatGPT+Kling+ElevenLabs+CapCut) VS 傳統實拍剪輯 比較表」
比較面向涵蓋：
- 製作效率 (完成一支影片所需時間)
- 視覺品質與鏡頭控制精細度
- 角色一致性與客製化彈性
- 對演算法指標（留存率、原創性）的優化能力

第三問｜應用與爭議：
針對 [1分鐘 AI 影片製作]：
1. 目前這個 AI 工作流在行銷、教學、小說推文等領域被怎麼應用？代表作是什麼？
2. 學界與產業目前對於 AI 影片的爭議有哪些？（如版權爭議、平台限流政策）
3. 請幫我整理一個 3 分鐘的口語化版本，向一個完全不懂 AI 的朋友介紹如何用 AI 高效做出一支好看的 Reels。`,
        outputContent: `
          <div class="output-card">
            <h3>第一問回覆：歷史脈絡</h3>
            <p><strong>前 AI 時代痛點：</strong>傳統製作短片需要「租借設備 &rarr; 實體拍攝 &rarr; 手動配音 &rarr; 精細剪輯」，痛點在於<strong>時間與資金成本極高</strong>，且若拍攝完發現素材不合用，無法低成本重來。</p>
            <p><strong>模組化 AI 工作流的價值：</strong>將「拍攝」降維成「文字提示詞」，將「配音」降維成「文字轉語音」，將製作時間從 3 天壓縮至 30 分鐘，實現了「低成本快速試錯」，讓創作者能以量取勝，測試演算法偏好。</p>

            <h3>第二問回覆：三者比較表</h3>
            <div class="output-table-container">
              <table class="output-table">
                <thead>
                  <tr>
                    <th>比較面向</th>
                    <th>一站式 AI 影片 (InVideo)</th>
                    <th>模組化協同工作流 (本站推薦)</th>
                    <th>傳統實拍剪輯</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>製作效率</strong></td>
                    <td>極高 (1-3分鐘一鍵生成)。</td>
                    <td>高 (15-30分鐘，多工具協作)。</td>
                    <td>極低 (數小時至數天)。</td>
                  </tr>
                  <tr>
                    <td><strong>視覺品質與控制度</strong></td>
                    <td>低。素材庫拼貼感重，動作僵硬。</td>
                    <td><strong>高。利用 Kling/Runway 控制鏡頭軌跡與物理動態。</strong></td>
                    <td>極高。實機拍攝，完全受控。</td>
                  </tr>
                  <tr>
                    <td><strong>角色一致性</strong></td>
                    <td>極差。每張圖人物長得都不一樣。</td>
                    <td><strong>中至高。可透過 LoRA 與 Reference 圖保持角色外貌。</strong></td>
                    <td>完美。實體演員拍攝。</td>
                  </tr>
                  <tr>
                    <td><strong>原創性與推流潛力</strong></td>
                    <td>差。極易被演算法判定為低品質重置。</td>
                    <td><strong>極佳。腳本與畫面皆為原創生成，完看率高。</strong></td>
                    <td>極佳。天然具備最高原創權重。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>第三問回覆：3分鐘科普版本</h3>
            <p><strong>口語化介紹：</strong></p>
            <ul>
              <li><strong>開場鉤子：</strong>「你有沒有想過，你每天晚上在 Instagram 滑到的那些精美短影音，裡面說話的人和畫面，可能大半都是 AI 憑空捏造出來的？」</li>
              <li><strong>三個重點：</strong>
                <ol>
                  <li><strong>我們不拍片，我們寫片：</strong>現在做 Reels 不用買相機，只要跟 ChatGPT 說你的想法，它就會把 1 分鐘的台詞和畫面描述寫好。</li>
                  <li><strong>AI 演員與導演分工：</strong>接著，我們把台詞丟給 ElevenLabs，它能生出帶有呼吸聲、非常自然的真人配音；再把畫面描述丟給 Kling，它就能生出像電影一樣的 4 秒片段。</li>
                  <li><strong>像樂高一樣組裝：</strong>最後，在 CapCut 裡把聲音和畫面拼在一起，讓畫面每 1 秒就切換一次，跟著音樂節奏走，這就是高流量短片的秘密。</li>
                </ol>
              </li>
              <li><strong>常見誤解：</strong>「很多人以為 AI 影片就是按一個鍵直接做好，那種影片通常很假，而且會被平台限流。真正好看的 AI 影片，後期的剪輯、卡點與字幕，還是需要人類的手工調校。」</li>
              <li><strong>收尾金句：</strong>「AI 沒有取代你的創意，它只是幫你省去了體力活，讓你的點子能以百倍的速度出現在大家眼前。」</li>
            </ul>
          </div>
        `
      },
      {
        stepBadge: "Step 6",
        stepTitle: "知識內化｜學習單自檢與 AI 驗證",
        vkThought: "現在，輪到你來檢測自己是否真的理解了。請試著用自己的話填寫下方的 AI 短影音學習單。寫不出來代表你還沒完全消化，寫完後點擊驗證按鈕，系統會模擬 NotebookLM 幫你做邏輯與事實檢查，指出有哪些細節需要回頭補強。",
        instructions: [
          "在下方互動學習單中，試著用自己的話回答這 3 個短影音工作流核心問題",
          "點擊「模擬 AI 教授驗證」按鈕，系統將模擬 NotebookLM 的反饋，指出你理解中的事實性錯誤或需要深化的部分"
        ],
        promptTemplate: `我的理解是：
[把你在學習單裡寫的內容全部貼在這裡]

請根據資料幫我檢查：
1. 有沒有事實上的錯誤？特別是關於演算法指標與 AI 工具特性的地方
2. 有沒有重要的遺漏？
3. 我的理解有沒有偏差或過度簡化？
4. 有沒有誤解了安全區或角色一致性的運作方式？

請直接指出問題，並附上對應的來源引用。`,
        outputContent: `
          <div class="practice-container">
            <div class="practice-row">
              <label class="practice-label">1. 請用 2-3 句話說明，如何用模組化 AI 工作流高效做出一支 1 分鐘的 Reels？</label>
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
        stepTitle: "知識迴旋｜存為筆記建立你的影音知識庫",
        vkThought: "AI 技術的更迭是永無止境的。下個月可能又會出一款能完美保持角色一致性的新工具，或者 Meta 又調整了 Reels 的完看率權重。這一步我們把好不容易整理出來的「工具比較表」和「學習單校正版」存成筆記，並轉成 NotebookLM 來源。下次有新工具發佈時，直接上傳 PDF，讓 AI 幫你比對你的工作流該如何升級。",
        instructions: [
          "在 NotebookLM 點擊 Step 5 比較表對話旁的「儲存為記事」，命名為「AI影音工具工作流對照表」",
          "點擊記事右上角選單 &rarr; 「轉成來源」",
          "當未來有 Sora 最新白皮書或 YouTube 演算法更新文章時，直接上傳，並使用下方 Prompt 進行分析比對"
        ],
        promptTemplate: `我之前關於 AI 短影音工作流的筆記已經在來源 (Notes) 中。現在我上傳了最新的 [例如：Sora 2.0 更新文件 / TikTok 2026 演算法報告]。
請幫我分析：
1. 這份新資料會如何改進我現有的 ChatGPT + Kling + ElevenLabs 工作流？
2. 在角色一致性與鏡頭運動控制上，新技術是否提供了更好的解決方案？
3. 平台演算法政策有發生什麼需要我立即調整影片發布策略的變化嗎？
4. 請幫我更新我的工具對照表。`,
        outputContent: `
          <div class="output-card">
            <h3>真實成果：知識庫更新對照示例 (加入 2026 最新演算法報告後)</h3>
            <p><strong>新加入文獻：</strong><em>Meta Creators Portal (2026). Adjustments to Originality Detection on Instagram Reels.</em></p>
            
            <div class="vk-thought-box">
              <div class="vk-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                NotebookLM 比對分析結果：
              </div>
              <p class="vk-desc">「與您在來源中的基礎筆記相比，2026 年 Meta 最新報告顯示了以下重大調整：<br><br>
              <strong>1. 原創性演算法升級：</strong>系統現在能識別出超過 80% 的『純 AI 語音 (無情緒波動、無呼吸聲之 TTS)』。如果影片使用此類配音，即使畫面完全原創，也會被限流，只推給關注者。<br><br>
              <strong>2. 工作流調整建議：</strong>請立即將您的 ElevenLabs 配音設定調整為『語音克隆 2.0 (含有自然呼吸起伏與語調停頓)』，或在 CapCut 後製時加入 5% 的環境背景噪音 (Ambience noise) 以混淆系統的數位浮水印偵測，否則下階段的 Reels 完看率將大幅下滑。」</p>
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
  } else {
    document.getElementById('video-q1').value = "透過模組化分工：ChatGPT 規劃腳本與分鏡，Kling/Runway 控制相機鏡頭運動生成畫面，ElevenLabs 克隆真人情感聲音做配音，最後在 CapCut 裡將聲音畫面卡點拼裝。";
    document.getElementById('video-q2').value = "黃金3秒鉤子能誘發大腦停止滑動的決策，決定影片會否被滑走；而 0.7s-1.2s 的快速視覺節奏切換，能持續給予視覺多巴胺，拉高留存率以觸發演算法推薦。";
    document.getElementById('video-q3').value = "演算法會限流低原創的純 AI 模板影片，並審查無起伏機械音。創作者應主動標註 AI 標籤，並在腳本策展、情感配音的呼吸感以及動態字幕卡點上手動精細調校。";
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
          <p>您的理解非常精準！您正確指出 JJC 模式是融合了 JIT 與自働化 (Jidoka) 的小循環，且強調以低成本非侵入感測器傳遞『限量資訊』，此點與楊大和教授在 2021 年奠基論文中的主張完全一致，沒有事實錯誤。</p>
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
    } else {
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
    }
  }, 1500);
}

// Initial setup on load
window.onload = () => {
  switchCase('lean');
};
