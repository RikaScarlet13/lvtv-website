// import { useAuth } from "../../context/AuthContext";

// const AdminDashboard = () => {
//   // const { user, logout } = useAuth();

//   return (
//     // <div>
//     //   <h1>Admin Dashboard</h1>
//     //   <p>Welcome, {user?.username}</p>
//     //   <button onClick={logout}>Logout</button>
//     // </div>

//     <div className="flex w-screen h-screen text-gray-400 bg-gray-900">
//       {/* Component Start */}
//       <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500">
//         <a
//           className="flex items-center justify-center flex-shrink-0 w-full h-16"
//           href="#"
//         >
//           <svg
//             className="w-8 h-8 stroke-current text-gray-300"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//             />
//           </svg>
//         </a>
//         {[
//           {
//             d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
//           },
//           {
//             d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
//           },
//           {
//             d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
//           },
//           {
//             d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
//           },
//           {
//             d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
//           },
//           {
//             d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//           },
//         ].map((icon, index) => (
//           <a
//             key={index}
//             className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800"
//             href="#"
//           >
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={icon.d}
//               />
//             </svg>
//           </a>
//         ))}
//         <a
//           className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-800"
//           href="#"
//         >
//           <svg
//             className="w-5 h-5"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </a>
//       </div>
//       <div className="flex flex-col w-56 border-r border-gray-800">
//         <button className="relative text-sm focus:outline-none group">
//           <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800">
//             <span className="font-medium">Dropdown</span>
//             <svg
//               className="w-4 h-4"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-800 shadow-lg group-focus:flex">
//             {["Menu Item 1", "Menu Item 2", "Menu Item 3"].map(
//               (item, index) => (
//                 <a
//                   key={index}
//                   className="w-full px-4 py-2 text-left hover:bg-gray-900"
//                   href="#"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </button>
//         <div className="flex flex-col flex-grow p-4 overflow-auto">
//           {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"].map(
//             (item, index) => (
//               <a
//                 key={index}
//                 className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800"
//                 href="#"
//               >
//                 <span className="leading-none">{item}</span>
//               </a>
//             )
//           )}
//           <a
//             className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700"
//             href="#"
//           >
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//             <span className="ml-2 leading-none">New Item</span>
//           </a>
//         </div>
//       </div>
//       <div className="flex flex-col flex-grow">
//         <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800">
//           <h1 className="text-lg font-medium">Page Title</h1>
//           <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800">
//             Action 1
//           </button>
//           <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium rounded hover:bg-gray-800">
//             Action 2
//           </button>
//           <button className="relative ml-2 text-sm focus:outline-none group">
//             <div className="flex items-center justify-between h-10 px-4 border rounded hover:bg-gray-800">
//               <span>Dropdown</span>
//               <svg
//                 className="w-4 h-4 ml-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="absolute right-0 z-10 flex-col items-start hidden w-48 pb-1 bg-gray-800 shadow-lg group-focus:flex">
//               {["Menu Item 1", "Menu Item 2", "Menu Item 3"].map(
//                 (item, index) => (
//                   <a
//                     key={index}
//                     className="w-full px-4 py-2 text-left hover:bg-gray-900"
//                     href="#"
//                   >
//                     {item}
//                   </a>
//                 )
//               )}
//             </div>
//           </button>
//         </div>
//         <div className="flex-grow p-6 overflow-auto bg-gray-800">
//           <div className="grid grid-cols-3 gap-6">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="flex items-center h-24 px-6 py-4 bg-gray-900 border border-gray-800 rounded"
//               >
//                 Item {index + 1}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Component End  */}
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import AdminSidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const App: React.FC = () => {
  const page = {
    language: "en", // Replace with actual data if available
    getUrl: () => "https://example.com", // Replace with actual function if available
    description: "Page description", // Replace with actual data if available
    title: "Page title", // Replace with actual data if available
  };

  return (
    <html lang={page.language}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="always" />
        <link rel="canonical" href={page.getUrl()} />
        <meta name="description" content={page.description} />
        <title>{page.title}</title>
        <link rel="stylesheet" href="path/to/main.css" />
        <script src="path/to/main.js" defer></script>
      </head>
      <body className="flex h-screen bg-gray-200 font-roboto">
        {/* Sidebar Component */}

        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Component */}
          <Header />
          <header className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Body Content */}
              <div className="mx-auto px-6 py-8">
                {/* Your dynamic body content here */}
                <h1 className="text-3xl font-bold mb-4">Page Content</h1>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </header>
        </div>
      </body>
    </html>
  );
};

export default App;
