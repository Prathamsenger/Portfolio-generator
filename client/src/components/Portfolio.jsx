import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Github, Linkedin, Globe, Briefcase, GraduationCap, Award, Eye, Edit3, Camera, Upload } from 'lucide-react';

const PortfolioGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    github: '',
    linkedin: '',
    about: '',
    skills: '',
    experience: '',
    education: '',
    projects: '',
    profileImage: null
  });

  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profileImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({
      ...formData,
      profileImage: null
    });
  };

  const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill);
  const experienceArray = formData.experience.split('\n').filter(exp => exp.trim());
  const educationArray = formData.education.split('\n').filter(edu => edu.trim());
  const projectsArray = formData.projects.split('\n').filter(proj => proj.trim());

  const ModernTemplate = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
              {formData.profileImage ? (
                <img 
                  src={formData.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                formData.name.charAt(0) || 'U'
              )}
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {formData.name || 'Your Name'}
              </h1>
              <p className="text-2xl text-gray-600 mb-4">{formData.title || 'Your Title'}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
                {formData.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>{formData.email}</span>
                  </div>
                )}
                {formData.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>{formData.phone}</span>
                  </div>
                )}
                {formData.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{formData.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About */}
            {formData.about && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="text-indigo-600" size={24} />
                  About Me
                </h2>
                <p className="text-gray-600 leading-relaxed">{formData.about}</p>
              </div>
            )}

            {/* Skills */}
            {skillsArray.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="text-purple-600" size={24} />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect</h2>
              <div className="space-y-3">
                {formData.website && (
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
                    <Globe size={20} />
                    <span>Website</span>
                  </a>
                )}
                {formData.github && (
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {formData.linkedin && (
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience */}
            {experienceArray.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Briefcase className="text-green-600" size={24} />
                  Experience
                </h2>
                <div className="space-y-4">
                  {experienceArray.map((exp, index) => (
                    <div key={index} className="border-l-4 border-indigo-300 pl-4 py-2">
                      <p className="text-gray-700">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {projectsArray.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Globe className="text-blue-600" size={24} />
                  Projects
                </h2>
                <div className="grid gap-4">
                  {projectsArray.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                      <p className="text-gray-700">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {educationArray.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <GraduationCap className="text-orange-600" size={24} />
                  Education
                </h2>
                <div className="space-y-4">
                  {educationArray.map((edu, index) => (
                    <div key={index} className="border-l-4 border-purple-300 pl-4 py-2">
                      <p className="text-gray-700">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center text-orange-700 bg-amber-100 mb-12 border-b border-blue-200 pb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-300 rounded-full overflow-hidden">
            {formData.profileImage ? (
              <img 
                src={formData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-2xl font-bold">
                {formData.name.charAt(0) || 'U'}
              </div>
            )}
          </div>
          <h1 className="text-6xl font-light text-red-900 mb-2">
            {formData.name || 'Your Name'}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{formData.title || 'Your Title'}</p>
          <div className="flex justify-center gap-6 text-gray-500 text-sm">
            {formData.email && <span>{formData.email}</span>}
            {formData.phone && <span>{formData.phone}</span>}
            {formData.location && <span>{formData.location}</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                {formData.website && <div>{formData.website}</div>}
                {formData.github && <div>GitHub</div>}
                {formData.linkedin && <div>LinkedIn</div>}
              </div>
            </div>

            {/* Skills */}
            {skillsArray.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Skills</h3>
                <div className="space-y-1">
                  {skillsArray.map((skill, index) => (
                    <div key={index} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-10">
            {/* About */}
            {formData.about && (
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed">{formData.about}</p>
              </div>
            )}

            {/* Experience */}
            {experienceArray.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Experience
                </h2>
                <div className="space-y-6">
                  {experienceArray.map((exp, index) => (
                    <div key={index}>
                      <p className="text-gray-700">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {projectsArray.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Projects
                </h2>
                <div className="space-y-4">
                  {projectsArray.map((project, index) => (
                    <div key={index}>
                      <p className="text-gray-700">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {educationArray.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Education
                </h2>
                <div className="space-y-4">
                  {educationArray.map((edu, index) => (
                    <div key={index}>
                      <p className="text-gray-700">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (showPreview) {
    return (
      <div className="relative">
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setShowPreview(false)}
            className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Edit3 size={18} />
            Edit
          </button>
        </div>
        {selectedTemplate === 'modern' ? <ModernTemplate /> : <MinimalTemplate />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-300 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Portfolio Generator</h1>
          <p className="text-gray-600 text-center mb-8">Create your professional portfolio in minutes</p>

          {/* Template Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Template</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedTemplate('modern')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTemplate === 'modern'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-800">Modern</h3>
                <p className="text-sm text-gray-600">Colorful gradient design with cards</p>
              </button>
              <button
                onClick={() => setSelectedTemplate('minimal')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTemplate === 'minimal'
                   ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-800">Minimal</h3>
                <p className="text-sm text-gray-600">Clean, professional layout</p>
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Profile Image Upload */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-4">Profile Image</label>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  {formData.profileImage ? (
                    <img 
                      src={formData.profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Camera size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex space-x-4">
                    <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                      <Upload size={16} className="mr-2" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {formData.profileImage && (
                      <button
                        onClick={removeImage}
                        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload a professional headshot. Recommended: Square image, max 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Full Stack Developer"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="New York, NY"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://johndoe.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://github.com/johndoe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Brief description about yourself, your passion, and what you do..."
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="React, JavaScript, Python, Node.js (comma separated)"
              />
              <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Senior Developer at Company (2020-2023)&#10;Junior Developer at StartUp (2018-2020)"
              />
              <p className="text-xs text-gray-500 mt-1">Each line will be a separate experience entry</p>
            </div>

            {/* Projects */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="E-commerce Platform - Full-stack web application built with React and Node.js&#10;Mobile App - React Native app with 10k+ downloads"
              />
              <p className="text-xs text-gray-500 mt-1">Each line will be a separate project</p>
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Bachelor of Science in Computer Science - University Name (2018)&#10;Certification in Web Development - Online Course (2019)"
              />
              <p className="text-xs text-gray-500 mt-1">Each line will be a separate education entry</p>
            </div>

            {/* Generate Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => setShowPreview(true)}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                Generate Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGenerator;