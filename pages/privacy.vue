<script setup lang="ts">
const today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')

const lastUpdated = `${yyyy}-${mm}-${dd}`
const contactEmail = 'contact@xcc.tw'
</script>

<template>
  <div cursor-default font-300 m-auto max-w-70vw>
    <h1 text-center text-4xl>
      隱私權政策｜Privacy Policy
    </h1>
    <br>
    <header>
      <p text-center text-gray-500 class="meta">
        最後更新日 Last Updated：<strong>{{ lastUpdated }}</strong>
      </p>
    </header>
    <br>
    <!-- ==================== ZH-TW ==================== -->
    <article class="zh visible" lang="zh-Hant-TW">
      <section>
        <h2>1. 核心聲明（不蒐集、不留存、不轉用）</h2>
        <ul>
          <li>我們<strong>不蒐集、不中繼儲存、亦不永久留存</strong>任何可識別個人身分之資料（PII）。</li>
          <li>我們<strong>不進行</strong>任何廣告行為、行為追蹤、再行銷、受眾建模、第三方分析、研究計畫或統計用途；亦<strong>不使用</strong>任何資料作為<strong>機器學習/大型語言模型（LLM）訓練或微調</strong>之素材。</li>
          <li>除完成 Google OAuth 2.0 驗證所<strong>必要且短暫</strong>的技術性資料外（見第 2 節），我們<strong>不會</strong>儲存或持續處理使用者資料。</li>
          <li>若未來服務設計有變更，我們將先更新本政策並於頁面明顯處公告。</li>
        </ul>
        <p class="note">
          我們遵循 <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a>（含 Limited Use 條款），只在介面上明確呈現且對使用者有幫助的功能中，於必要最小範圍內處理資料；不轉移資料、不用於廣告，並以使用者同意與安全為前提。
        </p>
      </section>
      <br>
      <section>
        <h2>2. 關於 Google OAuth 2.0 的資料處理</h2>
        <ul>
          <li>使用 Google 帳戶登入時，Google 可能於 OAuth 流程中傳回授權碼/權杖（token）與 ID Token（含 Google 唯一識別子 <code>sub</code> 及/或基本公開資訊之<strong>驗證結果</strong>）。</li>
          <li>我們僅在<strong>程序記憶體</strong>中短暫使用上述資訊以完成身分驗證與會話建立；<strong>不會持久化儲存</strong>權杖、ID Token 或個人資料，流程結束即<strong>立即丟棄</strong>。</li>
          <li>我們<strong>不要求敏感或受限範圍（sensitive/restricted scopes）</strong>。若未來功能需要，將秉持最小必要原則並於更新本政策後才實施。</li>
        </ul>
      </section>
      <br>
      <section>
        <h2>3. 不出售、不共用、不轉移</h2>
        <p>我們不出售、不出租、不交換任何使用者資料；亦不向任何第三方轉移資料，或允許任何第三方將資料用於廣告、行銷、研究或 AI 訓練（符合 Limited Use 規範）。</p>
      </section>
      <br>
      <section>
        <h2>4. Cookie、追蹤與分析</h2>
        <p>本服務不使用會辨識個人的 Cookie、第三方追蹤器或分析 SDK。若為維運所需之<strong>嚴格必要 Cookie</strong>（例如 CSRF 防護一次性值），其內容不含個資且僅在工作階段內有效。</p>
      </section>
      <br>
      <section>
        <h2>5. 日誌與保留期間</h2>
        <p>我們預設<strong>不保留</strong>包含個人資料的伺服器日誌。若基礎設施供應商因資安或除錯而產生<strong>匿名化與彙總</strong>技術日誌，僅用於即時維運，並於最短期限內自動刪除。</p>
      </section>
      <br>
      <section>
        <h2>6. 資料安全</h2>
        <ul>
          <li>全程使用 <strong>TLS</strong> 加密傳輸。</li>
          <li>權杖與驗證資訊僅在<strong>程序記憶體</strong>暫態存在；不寫入磁碟、資料庫或長期日誌。</li>
          <li>採最小存取原則，僅限必要維運程序在必要時短暫處理。</li>
        </ul>
      </section>
      <br>
      <section>
        <h2>7. 兒童隱私</h2>
        <p>本服務面向一般大眾與企業使用者，<strong>不特別針對 13 歲以下兒童</strong>，亦不主動蒐集兒童個資。</p>
      </section>
      <br>
      <section>
        <h2>8. 您的權利</h2>
        <p>由於我們不留存個資，通常<strong>無可提供之存取/更正/刪除</strong>資料；若您仍提出請求，我們會回覆並協助確認未留存之事實。</p>
      </section>
      <br>
      <section>
        <h2>9. 政策更新</h2>
        <p>本政策可能因法規或服務調整而更新；重大變更將於頁面明顯處公告並標示生效日。</p>
      </section>
      <br>
      <section>
        <h2>10. 聯絡方式</h2>
        <p>
          任何隱私相關問題，請聯絡：<strong><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></strong><br>
        </p>
        <p class="note">
          <strong>展示與連結要求：</strong>本政策應公開於與應用首頁<strong>同一網域</strong>，並在 OAuth 同意畫面提供連結；所有使用之網域需在 Google Cloud 專案中完成授權網域驗證。
        </p>
      </section>
    </article>
    <br>
    <!-- ==================== EN ==================== -->
    <article class="en" lang="en">
      <section>
        <h2>1. Core Statement (No Collection, No Retention, No Repurposing)</h2>
        <ul>
          <li>We <strong>do not collect, persist, or retain</strong> any personally identifiable information (PII).</li>
          <li>We <strong>do not</strong> conduct advertising, tracking, remarketing, audience profiling, third-party analytics, research, or statistics; we <strong>do not</strong> use any data for <strong>machine-learning / LLM training or fine-tuning</strong>.</li>
          <li>Except for data <strong>strictly necessary and transient</strong> to complete the Google OAuth 2.0 flow (see Section 2), we <strong>do not</strong> store or continuously process user data.</li>
          <li>If our design ever changes, we will update this Policy and provide clear notice before it takes effect.</li>
        </ul>
        <p class="note">
          We comply with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a> (including the Limited Use requirements): use data only to provide or improve user-facing features that are prominent in the UI; no data transfers (with narrow exceptions), no ads use; security and user consent first.
        </p>
      </section>
      <br>
      <section>
        <h2>2. Data Handling for Google OAuth 2.0</h2>
        <ul>
          <li>When signing in with Google, Google may return authorization codes/tokens and an ID Token (containing Google’s unique identifier <code>sub</code> and/or the <strong>verification result</strong> of basic public info).</li>
          <li>We use such information only in <strong>volatile process memory</strong> to complete authentication and session setup; we <strong>do not</strong> persist tokens, ID Tokens, or personal data to any database or long-term logs, and we <strong>discard</strong> them immediately after the flow completes.</li>
          <li>We <strong>do not</strong> request sensitive or restricted scopes. If future features require them, we will follow data-minimization and update this Policy first.</li>
        </ul>
      </section>
      <br>
      <section>
        <h2>3. No Sale, No Sharing, No Transfers</h2>
        <p>We do not sell, rent, or exchange any user data; we do not transfer data to any third party, nor allow any third party to use data for ads, marketing, research, or AI training, consistent with Limited Use requirements.</p>
      </section>
      <br>
      <section>
        <h2>4. Cookies, Tracking, and Analytics</h2>
        <p>The Service does not use personally identifying cookies, third-party trackers, or analytics SDKs. If strictly necessary <strong>operational cookies</strong> are used (e.g., CSRF anti-forgery nonces), they contain no personal data and expire with the session.</p>
      </section>
      <br>
      <section>
        <h2>5. Logs and Retention</h2>
        <p>By default we <strong>do not retain</strong> server logs containing personal data. If our infrastructure provider generates <strong>anonymized and aggregated</strong> technical logs for security or debugging, they are used only for real-time operations and are automatically deleted after the shortest feasible period.</p>
      </section>
      <br>
      <section>
        <h2>6. Security</h2>
        <ul>
          <li>Transport is encrypted via <strong>TLS</strong>.</li>
          <li>Tokens and verification data exist only in <strong>process memory</strong>; not written to disk, databases, or long-term logs.</li>
          <li>Access follows least-privilege, limited to minimal operational processes.</li>
        </ul>
      </section>
      <br>
      <section>
        <h2>7. Children’s Privacy</h2>
        <p>The Service targets general and enterprise users and is <strong>not directed to children under 13</strong>. We do not knowingly collect children’s data.</p>
      </section>
      <br>
      <section>
        <h2>8. Your Rights</h2>
        <p>Because we do not retain personal data, there is generally <strong>no data to access/correct/delete</strong>. If you still submit a request, we will respond and confirm the absence of retained data.</p>
      </section>
      <br>
      <section>
        <h2>9. Changes to This Policy</h2>
        <p>We may update this Policy due to legal or service changes. Material updates will be announced prominently with an effective date.</p>
      </section>
      <br>
      <section>
        <h2>10. Contact Us</h2>
        <p>
          For privacy inquiries, contact: <strong><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></strong><br>
        </p>
        <p class="note">
          <strong>Display & Linking:</strong> Host this Policy on the <strong>same domain</strong> as your app’s homepage and link it on the OAuth consent screen; ensure all domains in use are verified in your Google Cloud project’s Authorized domains.
        </p>
      </section>
    </article>
    <Footer />
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  color: coral;
}

a {
  color: deepskyblue;
}
</style>
