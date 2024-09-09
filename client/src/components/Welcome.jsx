import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, note, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Transfer Crypto Anywhere
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Web 3.0 world. Buy and sell cryptocurrencies easily.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          <div className={`col-span-2 sm:col-span-1 p-4 text-center rounded-tl-2xl ${companyCommonStyles}`}>
            <i className="fas fa-shield-alt fa-2x mb-2"></i>
            <div>Reliability</div>
          </div>
          <div className={`p-4 text-center ${companyCommonStyles}`}>
            <i className="fas fa-lock fa-2x mb-2"></i>
            <div>Security</div>
          </div>
          <div className={`p-4 text-center rounded-tr-2xl ${companyCommonStyles}`}>
            <i className="fas fa-cube fa-2x mb-2"></i>
            <div>Decentralized (Dapp)</div>
          </div>
          <div className={`p-4 text-center sm:col-span-2 sm:row-span-2  ${companyCommonStyles}`}>
            <i className="fab fa-ethereum fa-2x mb-2"></i>
            <div>Web 3.0</div>
          </div>
          <div className={`p-4 text-center ${companyCommonStyles}`}>
            <i className="fas fa-globe fa-2x mb-2"></i>
            <div>Ethereum</div>
          </div>
          <div className={`p-4 text-center ${companyCommonStyles}`}>
            <i className="fas fa-wallet fa-2x mb-2"></i>
            <div>Low Fees</div>
          </div>
          <div className={`p-4 text-center rounded-bl-2xl ${companyCommonStyles}`}>
            <i className="fas fa-cube fa-2x mb-2"></i>
            <div>Blockchain</div>
          </div>
          <div className={`p-4 text-center  ${companyCommonStyles}`}>
            <i className="fas fa-cube fa-2x mb-2"></i>
            <div>Smart Contract</div>
          </div>
          <div className={`p-4 text-center rounded-br-2xl ${companyCommonStyles}`}>
            <i className="fas fa-cube fa-2x mb-2"></i>
            <div>Transparency</div>
          </div>
        </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
