import Image from "next/image";
import navbar from "@/components/Navbar";
export default function Home() {
  return (
    
    <>
    <div className="flex">
      <h1>
        Add a Credit card
      </h1>
      <h1>
        Add a Password
      </h1>
    </div>
    credit card and Password components should be side by side
    <div>
        <h1>
            Your Cards
        </h1>
        <YourCards />
    </div>
    <div>
        <h1>
            Your Passwords
        </h1>
        <YourPasswords />
    </div>
    </>
  );
}
