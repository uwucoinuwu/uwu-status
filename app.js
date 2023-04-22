const apiUrl = "https://api.uwucoin.xyz/info";

function fetchData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("height").textContent = data.height;
      document.getElementById("difficulty").textContent = data.difficulty;
      document.getElementById("tx_count").textContent = data.tx_count;
      document.getElementById("tx_pool_size").textContent = data.tx_pool_size;
      document.getElementById("last_known_block_index").textContent = data.last_known_block_index;
      document.getElementById("network_height").textContent = data.network_height;
      document.getElementById("hashrate").textContent = data.hashrate;
      document.getElementById("status").textContent = data.status;
      document.getElementById("alt_blocks_count").textContent = data.alt_blocks_count;

      if (document.getElementById("auto-refresh").checked) {
        setTimeout(fetchData, 30000); // 30 seconds
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

document.getElementById("auto-refresh").addEventListener("change", () => {
  if (document.getElementById("auto-refresh").checked) {
    fetchData();
  }
});

fetchData();
