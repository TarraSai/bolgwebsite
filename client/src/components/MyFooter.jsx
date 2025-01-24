import { Footer, Button } from 'flowbite-react';

function MyFooter() {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-1 rounded-t-lg mt-20">
      <Footer container={true} className="bg-gray-800 text-gray-300 rounded-t-lg">
        <div className="w-full text-center">
          <div className="flex justify-between items-center py-6">
            <p>&copy; {new Date().getFullYear()} Your Company</p>
            <div>
              <Button className="mr-2" gradientMonochrome="info">Terms of Service</Button>
              <Button variant="link" className="text-gray-300">Privacy Policy</Button>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default MyFooter;