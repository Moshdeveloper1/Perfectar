// Define the GraphQL query to fetch the latest data
const query = `
  {
    pair(id: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8") { 
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      reserve0
      reserve1
      token0Price
      token1Price
    }
  }
`;

// Function to fetch data from the Uniswap subgraph
async function fetchPrice() {
  try {
    const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    const responseData = await response.json();
    const pairData = responseData.data.pair;

    // Extracting the token prices
    const token0Symbol = pairData.token0.symbol;
    const token1Symbol = pairData.token1.symbol;
    const buyPrice = parseFloat(pairData.token0Price);
    const sellPrice = parseFloat(pairData.token1Price);

    console.log(
      `Current Buy Price (${token0Symbol}/${token1Symbol}): ${buyPrice}`
    );
    console.log(
      `Current Sell Price (${token1Symbol}/${token0Symbol}): ${sellPrice}`
    );
  } catch (error) {
    console.error("Error fetching price data:", error);
  }
}

// Call the function to fetch and display prices
fetchPrice();










const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Endpoint to get current buying and selling prices from a DEX
app.get("/api/prices", async (req, res) => {
  try {
    // Replace with your desired trading pair ID and DEX API endpoint
    const pairId = "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"; // Uniswap example
    const graphqlQuery = `
            {
                pair(id: "${pairId}") { 
                    token0 {
                        symbol
                    }
                    token1 {
                        symbol
                    }
                    token0Price
                    token1Price
                }
            }
        `;

    // Fetch data from the DEX API
    const response = await axios.post(
      "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      {
        query: graphqlQuery,
      }
    );

    const pairData = response.data.data.pair;

    // Extracting the prices
    const buyPrice = parseFloat(pairData.token0Price);
    const sellPrice = parseFloat(pairData.token1Price);

    // Send response as JSON
    res.json({
      buyPrice,
      sellPrice,
      pair: {
        token0: pairData.token0.symbol,
        token1: pairData.token1.symbol,
      },
    });
  } catch (error) {
    console.error("Error fetching price data:", error);
    res.status(500).json({ error: "Failed to fetch price data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
