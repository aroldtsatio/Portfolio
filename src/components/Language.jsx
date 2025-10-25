import React from "react";

export default function Language() {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
                <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-2 rounded-lg">🗣️</span>
                Languages
            </h1>

            {/* Languages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Coding Languages */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300 group">
                    <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">💻</span>
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-700 mb-2">Coding Languages</h2>
                        <p className="text-gray-600 text-sm">Technologies & Frameworks</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">⚡</span>
                            <p className="font-semibold text-gray-800">JavaScript</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">🎨</span>
                            <p className="font-semibold text-gray-800">CSS</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">☕</span>
                            <p className="font-semibold text-gray-800">Java</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">🔷</span>
                            <p className="font-semibold text-gray-800">F#</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">🌐</span>
                            <p className="font-semibold text-gray-800">HTML</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-3 text-center hover:bg-white/80 transition-colors duration-200">
                            <span className="text-lg">🐍</span>
                            <p className="font-semibold text-gray-800">Python</p>
                        </div>
                    </div>
                </div>

                {/* Human Languages */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group">
                    <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🌍</span>
                        </div>
                        <h2 className="text-2xl font-bold text-green-700 mb-2">Human Languages</h2>
                        <p className="text-gray-600 text-sm">Communication & Culture</p>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-white/60 rounded-lg p-4 hover:bg-white/80 transition-colors duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇫🇷</span>
                                    <div>
                                        <p className="font-semibold text-gray-800">French</p>
                                        <p className="text-sm text-gray-600">Native Speaker</p>
                                    </div>
                                </div>
                                <div className="w-20 bg-green-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white/60 rounded-lg p-4 hover:bg-white/80 transition-colors duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇩🇪</span>
                                    <div>
                                        <p className="font-semibold text-gray-800">German</p>
                                        <p className="text-sm text-gray-600">Fluent</p>
                                    </div>
                                </div>
                                <div className="w-20 bg-green-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white/60 rounded-lg p-4 hover:bg-white/80 transition-colors duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇬🇧</span>
                                    <div>
                                        <p className="font-semibold text-gray-800">English</p>
                                        <p className="text-sm text-gray-600">Intermediate</p>
                                    </div>
                                </div>
                                <div className="w-20 bg-green-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}              