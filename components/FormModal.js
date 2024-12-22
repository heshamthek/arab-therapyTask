const FormModal = () => {
  const modalContent = `
    <div id="modalOverlay" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50">
      <div id="modal" class="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-[766px] z-50">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-800">أدخل معلوماتك و اطلب حساب تجريبي</h2>
          <button id="closeModalBtn" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div id="successMessage" class="hidden bg-green-400 border border-green-100 text-green-800 px-4 py-3 rounded relative mb-4">
          تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
        </div>

        <div id="errorMessage" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.
        </div>

        <form id="trialForm" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
              <input type="text" id="firstName" name="first_name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <span class="text-red-500 text-xs hidden" id="firstNameError">هذا الحقل مطلوب</span>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">الاسم الأخير</label>
              <input type="text" id="lastName" name="last_name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <span class="text-red-500 text-xs hidden" id="lastNameError">هذا الحقل مطلوب</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
              <div class="flex gap-2">
                <select id="countryCode" name="country_code" class="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </select>
                <input type="tel" id="mobile" name="mobile" class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              </div>
              <span class="text-red-500 text-xs hidden" id="mobileError">يرجى إدخال رقم هاتف صحيح</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني (الخاص بالعمل)</label>
              <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <span class="text-red-500 text-xs hidden" id="emailError">يرجى إدخال بريد إلكتروني صحيح</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">حجم المؤسسة</label>
              <select id="companySize" name="company_size" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">اختر حجم المؤسسة</option>
                <option value="1-50 عضو">1-50 عضو</option>
                <option value="51-200 عضو">51-200 عضو</option>
                <option value="201-500 عضو">201-500 عضو</option>
                <option value="501-1000 عضو">501-1000 عضو</option>
                <option value="1000 عضو">أكثر من 1000 عضو</option>
              </select>
              <span class="text-red-500 text-xs hidden" id="companySizeError">هذا الحقل مطلوب</span>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">اسم المؤسسة</label>
              <input type="text" id="organizationName" name="organization_name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <span class="text-red-500 text-xs hidden" id="organizationError">هذا الحقل مطلوب</span>
            </div>
          </div>

          <div class="text-sm text-gray-600">
            "تحتاج Arab Therapy - عرب ثيرابي إلى معلومات الاتصال التي تقدمها لنا للتواصل معك بشأن منتجاتنا وخدماتنا. يمكنك إلغاء الاشتراك وإيقاف التواصل معنا في أي وقت. للحصول على معلومات حول كيفية إلغاء الاشتراك، بسبب ممارسات الخصوصية لدينا وتعهدنا بحماية خصوصيتك، يرجى مراجعة سياسة الخصوصية الخاصة بنا."
          </div>

          <div class="flex justify-end">
            <button type="submit" id="submitButton" class="w-[220px] bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed " disabled>
              طلب حساب تجريبي
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  return {
    init: function () {
      document.body.insertAdjacentHTML("beforeend", modalContent);
      this.initializeFormValidation();
      this.initializeCountryCodes();
      this.setupEventListeners();
    },

    initializeFormValidation: function () {
      const form = document.getElementById("trialForm");
      const submitButton = document.getElementById("submitButton");

      function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      }

      function isValidPhone(phone) {
        return /^\d{9,}$/.test(phone.replace(/\D/g, ''));
      }

      function validateForm() {
        let isValid = true;
        const fields = {
          firstName: document.getElementById("firstName"),
          lastName: document.getElementById("lastName"),
          email: document.getElementById("email"),
          mobile: document.getElementById("mobile"),
          organizationName: document.getElementById("organizationName"),
          companySize: document.getElementById("companySize")
        };

        // Reset all error messages
        Object.keys(fields).forEach(field => {
          const errorElement = document.getElementById(`${field}Error`);
          if (errorElement) {
            errorElement.classList.add("hidden");
          }
        });

        // Validate each field
        Object.entries(fields).forEach(([fieldName, element]) => {
          if (!element.value.trim()) {
            const errorElement = document.getElementById(`${fieldName}Error`);
            if (errorElement) {
              errorElement.classList.remove("hidden");
            }
            isValid = false;
          }
        });

        // Special validation for email
        if (fields.email.value && !isValidEmail(fields.email.value)) {
          document.getElementById("emailError").classList.remove("hidden");
          isValid = false;
        }

        // Special validation for phone
        if (fields.mobile.value && !isValidPhone(fields.mobile.value)) {
          document.getElementById("mobileError").classList.remove("hidden");
          isValid = false;
        }

        submitButton.disabled = !isValid;
        return isValid;
      }

      // Add input event listeners to all form fields
      Object.keys(form.elements).forEach(key => {
        const element = form.elements[key];
        if (element.tagName === "INPUT" || element.tagName === "SELECT") {
          element.addEventListener("input", validateForm);
          element.addEventListener("blur", validateForm);
        }
      });
    },

    initializeCountryCodes: function () {
      const countryCodesData = [
        { name: "Jordan", code: "JO", emoji: "🇯🇴", dialCodes: ["+962"] },
        { name: "Saudi Arabia", code: "SA", emoji: "🇸🇦", dialCodes: ["+966"] },
        { name: "Afghanistan", code: "AF", emoji: "🇦🇫", dialCodes: ["+93"] },
        { name: "Turkey", code: "TR", emoji: "🇹🇷", dialCodes: ["+90"] },
        { name: "Qatar", code: "QA", emoji: "🇶🇦", dialCodes: ["+974"] },
        { name: "United Kingdom", code: "GB", emoji: "🇬🇧", dialCodes: ["+44"] },
        { name: "United States", code: "US", emoji: "🇺🇸", dialCodes: ["+1"] }
      ];

      const select = document.getElementById("countryCode");
      countryCodesData.forEach(country => {
        const option = document.createElement("option");
        option.value = country.dialCodes[0];
        option.textContent = `${country.emoji} ${country.dialCodes[0]}`;
        select.appendChild(option);
      });
    },

    setupEventListeners: function () {
      const modal = document.getElementById("modal");
      const modalOverlay = document.getElementById("modalOverlay");
      const closeBtn = document.getElementById("closeModalBtn");
      const form = document.getElementById("trialForm");
      const successMessage = document.getElementById("successMessage");
      const errorMessage = document.getElementById("errorMessage");

      function closeModal() {
        modal.classList.add("hidden");
        modalOverlay.classList.add("hidden");
        successMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");
        form.reset();
      }

      closeBtn.addEventListener("click", closeModal);
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitButton = document.getElementById("submitButton");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Format the mobile number with country code
        data.mobile = `${data.country_code}${data.mobile}`;
        delete data.country_code;

        submitButton.innerHTML = '<span class="loading">جاري تقديم البيانات...</span>';
        submitButton.disabled = true;
        successMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");

        try {
          const response = await fetch("https://stg.arabtherapy.com/api/v1/forms/submit/9", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });

          if (response.ok) {
            console.log("Form data submitted:", data);
            successMessage.classList.remove("hidden");
            form.reset();
            setTimeout(closeModal, 3000);
          } else {
            throw new Error("Network response was not ok");
          }
        } catch (error) {
          console.error("Error:", error);
          errorMessage.classList.remove("hidden");
        } finally {
          submitButton.innerHTML = 'طلب حساب تجريبي';
          submitButton.disabled = false;
        }
      });
    }
  };
};

export default FormModal;
