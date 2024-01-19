import React from 'react';
import Navbar from './components/Navbar';
import CustomerCard from './components/CustomerCard';
import ReviewSection from './components/ReviewSection';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-background-50'>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8 text-text-900'>
          Empower Your Dreams with Horizon Bank
        </h1>

        {/* Quote Section */}
        <section className='mb-8 text-2xl italic text-gray-500'>
          "Where dreams take flight, and financial aspirations find a home."
        </section>

        {/* About the Bank Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            About Horizon Bank
          </h2>
          <p className='text-lg text-text-700'>
            At Horizon Bank, we believe in empowering your dreams by providing
            seamless and secure banking services. Our mission is to be the
            horizon where your financial aspirations meet reality.
          </p>
        </section>

        {/* Services Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-8 text-text-800'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Service 1: Personal Savings */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Personal Savings'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>Personal Savings</h3>
              <p className='text-gray-600'>
                Start saving for your goals with our flexible and rewarding
                personal savings accounts. Enjoy competitive interest rates and
                personalized savings plans.
              </p>
            </div>

            {/* Service 2: Investment Planning */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Investment Planning'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>
                Investment Planning
              </h3>
              <p className='text-gray-600'>
                Explore investment options and create a plan tailored to your
                financial aspirations. Our experts provide guidance on
                investment strategies to help you achieve your financial goals.
              </p>
            </div>

            {/* Service 3: Home Loans */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Home Loans'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>Home Loans</h3>
              <p className='text-gray-600'>
                Achieve homeownership with our flexible and affordable home loan
                solutions. Benefit from competitive interest rates and
                customized loan terms.
              </p>
            </div>

            {/* Service 4: Credit Cards */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Credit Cards'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>Credit Cards</h3>
              <p className='text-gray-600'>
                Experience the convenience and rewards of our credit cards.
                Enjoy exclusive benefits, cashback, and seamless transactions.
              </p>
            </div>

            {/* Service 5: Business Loans */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Business Loans'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>Business Loans</h3>
              <p className='text-gray-600'>
                Fuel your business growth with our tailored business loan
                solutions. Access capital with competitive rates and flexible
                repayment options.
              </p>
            </div>

            {/* Add more services as needed */}
          </div>
        </section>

        {/* Customer Cards Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            Our Valued Customers
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <CustomerCard name='Customer 1' />
            <CustomerCard name='Customer 2' />
            <CustomerCard name='Customer 3' />
            {/* Add more CustomerCard components as needed */}
          </div>
        </section>

        {/* Review Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            Customer Reviews
          </h2>

          <ReviewSection />
        </section>

        {/* Transaction Section */}
        <section>
          <h2 className='text-2xl font-bold mb-8 text-text-800'>
            Perform Transactions with Ease
          </h2>
          <p className='text-lg text-text-700 mb-8'>
            Make secure transactions using our user-friendly platform. Whether
            it's transferring funds, paying bills, or managing your accounts,
            Horizon Bank has you covered.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Transaction Feature 1 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Transaction Feature 1'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>
                Instant Fund Transfers
              </h3>
              <p className='text-gray-600'>
                Transfer funds instantly to any bank account, making it
                convenient for you to manage your money.
              </p>
            </div>

            {/* Transaction Feature 2 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Transaction Feature 2'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>
                Bill Payments Made Easy
              </h3>
              <p className='text-gray-600'>
                Pay your bills seamlessly, from utility bills to credit card
                payments, all in one place.
              </p>
            </div>

            {/* Transaction Feature 3 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Transaction Feature 3'
                className='mb-4 w-full h-40 object-cover rounded'
              />
              <h3 className='text-lg font-semibold mb-2'>
                Secure Online Banking
              </h3>
              <p className='text-gray-600'>
                Enjoy the highest level of security while performing online
                transactions with our advanced encryption measures.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className='bg-footer py-4'>
        <div className='max-w-7xl mx-auto px-4'></div>
      </footer>
    </div>
  );
}

export default App;
