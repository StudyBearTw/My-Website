"use client";
export default function ProfileHeader() {
  return (
    <div className="text-center mb-8">
    <img
      src="/photo.jpg" // 你的大頭貼
      alt="Profile Picture"
      className="w-50 h-60 mx-auto rounded-full shadow-md"
    />
    <h1 className="text-3xl font-bold mt-4">薛恩明</h1>
    <p className="text-gray-600">Student of NKNU SE</p>
  </div>
  );
}