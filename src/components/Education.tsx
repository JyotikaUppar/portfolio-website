import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic journey in Information Technology, building a strong foundation for my career in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* University Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-lg text-slate-600 font-medium">
                    Shreemati Nathibai Damodar Thackersey Women's University
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-slate-500">Duration</p>
                      <p className="font-semibold text-slate-700">2023 - 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-sm text-slate-500">Current Status</p>
                      <p className="font-semibold text-slate-700">Third Year Student</p>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-blue-500 mr-2" />
                    Academic Performance
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500 mb-1">First Year CGPA</p>
                      <p className="text-2xl font-bold text-blue-600">7.73</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500 mb-1">Second Year CGPA</p>
                      <p className="text-2xl font-bold text-emerald-600">8.5</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-emerald-600">Consistent improvement</span> in academic performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Subjects/Areas of Study */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Areas of Study</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">💻</span>
                  </div>
                  <p className="font-medium text-slate-700">Programming & Development</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 font-bold">🗄️</span>
                  </div>
                  <p className="font-medium text-slate-700">Database Management</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">🌐</span>
                  </div>
                  <p className="font-medium text-slate-700">Web Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
