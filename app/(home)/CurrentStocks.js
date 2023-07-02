import Typography from "../_components/Typography";
import classnames from "classnames"

const STOCKS = [
  {
    company: "Nift bank",
    status: "up",
    currentValue: "0.01",
    initialValue: "41549.40",
  },
  {
    company: "Bajfinance",
    status: "down",
    currentValue: "0.30",
    initialValue: "6435.50",
  },
  {
    company: "Bhartiartl",
    status: "up",
    currentValue: "0.69",
    initialValue: "771.95",
  },
  {
    company: "HDFC bank",
    status: "up",
    currentValue: "0.40",
    initialValue: "1652.95",
  },
  {
    company: "Hindunilvr",
    status: "down",
    currentValue: "0.36",
    initialValue: "2557.95",
  },
  {
    company: "Indigo",
    status: "up",
    currentValue: "0.16",
    initialValue: "2257.95",
  },
  {
    company: "BankofIndia",
    status: "up",
    currentValue: "0.36",
    initialValue: "2457.95",
  },
  {
    company: "BankofBaroda",
    status: "down",
    currentValue: "0.16",
    initialValue: "1657.95",
  },
];



export default function CurrentStocks(){
    return (
      <marquee
        direction="right"
        scrollamount="10"
        className="w-full bg-gray-900 p-2"
      >
        <div className="flex items-center gap-6 text-gray-200">
          {STOCKS.map((stock) => (
            <div className="flex items-center space-x-4">
              <Typography component="body2">
                {stock.company.toUpperCase()}
              </Typography>
              <Typography component="body2">{stock.initialValue}</Typography>
              <Typography
                component="body2"
                className={classnames({
                  "text-green-800": stock.status === "up",
                  "text-red-800": stock.status === "down",
                })}
              >
                {stock.currentValue}%
              </Typography>
            </div>
          ))}
        </div>
      </marquee>
    );
}