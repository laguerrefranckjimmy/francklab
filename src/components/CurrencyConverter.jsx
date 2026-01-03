import { useState } from "react";
import "./css/CurrencyConverter.css";

const currencies = [
  { code: "AED", name: "UAE Dirham", country: "United Arab Emirates" },
  { code: "AFN", name: "Afghan Afghani", country: "Afghanistan" },
  { code: "ALL", name: "Albanian Lek", country: "Albania" },
  { code: "AMD", name: "Armenian Dram", country: "Armenia" },
  { code: "ANG", name: "Netherlands Antillian Guilder", country: "Netherlands Antilles" },
  { code: "AOA", name: "Angolan Kwanza", country: "Angola" },
  { code: "ARS", name: "Argentine Peso", country: "Argentina" },
  { code: "AUD", name: "Australian Dollar", country: "Australia" },
  { code: "AWG", name: "Aruban Florin", country: "Aruba" },
  { code: "AZN", name: "Azerbaijani Manat", country: "Azerbaijan" },
  { code: "BAM", name: "Bosnia and Herzegovina Mark", country: "Bosnia and Herzegovina" },
  { code: "BBD", name: "Barbados Dollar", country: "Barbados" },
  { code: "BDT", name: "Bangladeshi Taka", country: "Bangladesh" },
  { code: "BGN", name: "Bulgarian Lev", country: "Bulgaria" },
  { code: "BHD", name: "Bahraini Dinar", country: "Bahrain" },
  { code: "BIF", name: "Burundian Franc", country: "Burundi" },
  { code: "BMD", name: "Bermudian Dollar", country: "Bermuda" },
  { code: "BND", name: "Brunei Dollar", country: "Brunei" },
  { code: "BOB", name: "Bolivian Boliviano", country: "Bolivia" },
  { code: "BRL", name: "Brazilian Real", country: "Brazil" },
  { code: "BSD", name: "Bahamian Dollar", country: "Bahamas" },
  { code: "BTN", name: "Bhutanese Ngultrum", country: "Bhutan" },
  { code: "BWP", name: "Botswana Pula", country: "Botswana" },
  { code: "BYN", name: "Belarusian Ruble", country: "Belarus" },
  { code: "BZD", name: "Belize Dollar", country: "Belize" },
  { code: "CAD", name: "Canadian Dollar", country: "Canada" },
  { code: "CDF", name: "Congolese Franc", country: "Democratic Republic of the Congo" },
  { code: "CHF", name: "Swiss Franc", country: "Switzerland" },
  { code: "CLF", name: "Chilean Unidad de Fomento", country: "Chile" },
  { code: "CLP", name: "Chilean Peso", country: "Chile" },
  { code: "CNH", name: "Offshore Chinese Renminbi", country: "China" },
  { code: "CNY", name: "Chinese Renminbi", country: "China" },
  { code: "COP", name: "Colombian Peso", country: "Colombia" },
  { code: "CRC", name: "Costa Rican Colon", country: "Costa Rica" },
  { code: "CUP", name: "Cuban Peso", country: "Cuba" },
  { code: "CVE", name: "Cape Verdean Escudo", country: "Cape Verde" },
  { code: "CZK", name: "Czech Koruna", country: "Czech Republic" },
  { code: "DJF", name: "Djiboutian Franc", country: "Djibouti" },
  { code: "DKK", name: "Danish Krone", country: "Denmark" },
  { code: "DOP", name: "Dominican Peso", country: "Dominican Republic" },
  { code: "DZD", name: "Algerian Dinar", country: "Algeria" },
  { code: "EGP", name: "Egyptian Pound", country: "Egypt" },
  { code: "ERN", name: "Eritrean Nakfa", country: "Eritrea" },
  { code: "ETB", name: "Ethiopian Birr", country: "Ethiopia" },
  { code: "EUR", name: "Euro", country: "European Union" },
  { code: "FJD", name: "Fiji Dollar", country: "Fiji" },
  { code: "GBP", name: "Pound Sterling", country: "United Kingdom" },
  { code: "GHS", name: "Ghanaian Cedi", country: "Ghana" },
  { code: "HKD", name: "Hong Kong Dollar", country: "Hong Kong" },
  { code: "HRK", name: "Croatian Kuna", country: "Croatia" },
  { code: "HUF", name: "Hungarian Forint", country: "Hungary" },
  { code: "IDR", name: "Indonesian Rupiah", country: "Indonesia" },
  { code: "ILS", name: "Israeli New Shekel", country: "Israel" },
  { code: "INR", name: "Indian Rupee", country: "India" },
  { code: "JPY", name: "Japanese Yen", country: "Japan" },
  { code: "KES", name: "Kenyan Shilling", country: "Kenya" },
  { code: "KRW", name: "South Korean Won", country: "South Korea" },
  { code: "MXN", name: "Mexican Peso", country: "Mexico" },
  { code: "NGN", name: "Nigerian Naira", country: "Nigeria" },
  { code: "NOK", name: "Norwegian Krone", country: "Norway" },
  { code: "NZD", name: "New Zealand Dollar", country: "New Zealand" },
  { code: "PHP", name: "Philippine Peso", country: "Philippines" },
  { code: "PLN", name: "Polish Złoty", country: "Poland" },
  { code: "RON", name: "Romanian Leu", country: "Romania" },
  { code: "RUB", name: "Russian Ruble", country: "Russia" },
  { code: "SAR", name: "Saudi Riyal", country: "Saudi Arabia" },
  { code: "SEK", name: "Swedish Krona", country: "Sweden" },
  { code: "SGD", name: "Singapore Dollar", country: "Singapore" },
  { code: "THB", name: "Thai Baht", country: "Thailand" },
  { code: "TRY", name: "Turkish Lira", country: "Turkey" },
  { code: "USD", name: "United States Dollar", country: "United States" },
  { code: "ZAR", name: "South African Rand", country: "South Africa" },
  { code: "ZMW", name: "Zambian Kwacha", country: "Zambia" },
  { code: "ZWL", name: "Zimbabwean Dollar", country: "Zimbabwe" }
];

export default function CurrencyConverter({ onBack }) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.francklab.fyi/currency-converter/convert",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from_currency: fromCurrency,
            to_currency: toCurrency,
            amount: Number(amount),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to convert currency");
      }

      const data = await response.json();
      setRate(data.rate);
      setConvertedAmount(data.converted_amount);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="currencyconverter-container">
      <h1 className="page-title">Currency Converter</h1>
       <button className="back-button" onClick={onBack}>
        ← Back to Portfolio
      </button>

      {/* Input Form */}
      <form className="converter-form" onSubmit={handleConvert}>
        <div className="form-group">
          <label>From Currency</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} — {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>To Currency</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} — {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </button>
      </form>

      {/* Result Section (Read-only) */}
      <div className="result-section">
        <h2>Conversion Result</h2>

        {error && <p className="error">{error}</p>}

        {rate !== null && (
          <>
            <div className="result-item">
              <span>Exchange Rate:</span>
              <strong>{rate}</strong>
            </div>

            <div className="result-item">
              <span>Converted Amount:</span>
              <strong>{convertedAmount}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
