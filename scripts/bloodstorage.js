
      let bloodStorageData = [
        { bloodGroup: "A+", availableUnits: 25, storageCondition: "cold", lastUpdated: "2025-10-01 10:00 AM" },
        { bloodGroup: "AB-", availableUnits: 3, storageCondition: "cold", lastUpdated: "2025-10-08 05:00 PM" },
        { bloodGroup: "O+", availableUnits: 30, storageCondition: "warm", lastUpdated: "2025-10-03 12:00 PM" },
        { bloodGroup: "A-", availableUnits: 5, storageCondition: "warm", lastUpdated: "2025-10-05 02:00 PM" },
        { bloodGroup: "AB+", availableUnits: 10, storageCondition: "cold", lastUpdated: "2025-10-04 01:00 PM" },
        { bloodGroup: "B-", availableUnits: 8, storageCondition: "cold", lastUpdated: "2025-10-06 03:00 PM" },
        { bloodGroup: "B+", availableUnits: 15, storageCondition: "cold", lastUpdated: "2025-10-02 11:00 AM" },
        { bloodGroup: "O-", availableUnits: 12, storageCondition: "warm", lastUpdated: "2025-10-07 04:00 PM" },
      ];

      function renderBloodStorageData(data) {
        const bloodStorageBody = document.getElementById("bloodStorageBody");
        bloodStorageBody.innerHTML = "";

        data.forEach((item) => {
          const row = document.createElement("tr");
          const isNegative = item.bloodGroup.includes("-");
          row.innerHTML = `
            <td style="color: ${isNegative ? "var(--warm-color)" : "var(--cold-color)"}">${item.bloodGroup}</td>
            <td>${item.availableUnits}</td>
            <td class="storage-condition ${item.storageCondition}">
              ${item.storageCondition === "cold" ? "<i class='ri-snowy-line'></i> Cold" : "<i class='ri-fire-line'></i> Warm"}
            </td>
            <td>${item.lastUpdated}</td>
          `;
          bloodStorageBody.appendChild(row);
        });
      }

      function updateBloodUnits(bloodGroup, unitsUsed) {
        const bloodItem = bloodStorageData.find((item) => item.bloodGroup === bloodGroup);
        if (bloodItem) {
          bloodItem.availableUnits -= unitsUsed;
          bloodItem.lastUpdated = new Date().toLocaleString();
          renderBloodStorageData(bloodStorageData);
        }
      }
      
      renderBloodStorageData(bloodStorageData);
      
      setTimeout(() => {
        updateBloodUnits("O+", 5);
      }, 3000);

      const list = document.querySelectorAll('.list');
      const indicator = document.querySelector('.indicator');

      function moveIndicator(element) {
        indicator.style.left = `${element.offsetLeft}px`;
        indicator.style.width =`${element.offsetWidth}px`;
      }

      list.forEach((item) => {
        item.addEventListener('click', (e) => {
          list.forEach((nav) => nav.classList.remove('active'));
          item.classList.add('active');
          moveIndicator(item);
        });
      });
      
      moveIndicator(document.querySelector('.list.active'));

      const bloodGroups = document.querySelectorAll('.floating-blood-groups span');
      bloodGroups.forEach((span) => {
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 5}s`;
      });
   