
import React from "react";

export default function Focus() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-3">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg">🎯</span>
        Primary Focus
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Web Design & Development */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🌐</span>
            </div>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Web Design & Development
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Creating attractive, easy-to-use websites that work well for
              businesses and individuals online.
            </p>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📈</span>
            </div>
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              Digital Marketing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Helping businesses grow by using online marketing strategies like
              SEO, social media, and email campaigns.
            </p>
          </div>
        </div>

        {/* Full-Stack Solutions */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💻</span>
            </div>
            <h2 className="text-xl font-semibold text-purple-600 mb-3">
              Full-Stack Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Providing end-to-end web solutions, from front-end design to
              back-end development and database management.
            </p>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300 group">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎨</span>
            </div>
            <h2 className="text-xl font-semibold text-pink-600 mb-3">
              Graphic Design
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Designing visual content like logos, brochures, and social media
              graphics to help businesses stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}