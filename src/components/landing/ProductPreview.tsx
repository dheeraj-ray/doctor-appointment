import { cn } from '@/utils/cn';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, MoreHorizontal } from 'lucide-react';

export function ProductPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="preview-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Your Health Dashboard
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to manage your healthcare journey in one beautiful, intuitive interface.
          </p>
        </div>

        <div className="relative">
          <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-hover">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center px-3 py-1 bg-background rounded-md text-xs text-text-muted font-mono">
                dashboard.medicare.com
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-500" />
                      Upcoming Appointment
                    </h3>
                    <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <Avatar
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
                          name="Dr. Sarah Mitchell"
                          size="xl"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-text-primary">Dr. Sarah Mitchell</h4>
                            <Badge variant="primary" size="sm">Cardiology</Badge>
                          </div>
                          <p className="text-sm text-text-secondary mb-3">Interventional Cardiologist • 15 years experience</p>
                          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" aria-hidden="true" />
                              <span>Tomorrow, 10:30 AM</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" aria-hidden="true" />
                              <span>Video Consultation</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-medium text-primary-600">$180</span>
                            </div>
                          </div>
                          <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700">Join Visit</button>
                            <button className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary">Reschedule</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary-500" />
                      Your Health Summary
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-surface border border-border rounded-xl">
                        <div className="text-2xl font-bold text-text-primary">3</div>
                        <div className="text-sm text-text-muted">Active Prescriptions</div>
                      </div>
                      <div className="p-4 bg-surface border border-border rounded-xl">
                        <div className="text-2xl font-bold text-text-primary">12</div>
                        <div className="text-sm text-text-muted">Completed Visits</div>
                      </div>
                      <div className="p-4 bg-surface border border-border rounded-xl">
                        <div className="text-2xl font-bold text-text-primary">2</div>
                        <div className="text-sm text-text-muted">Pending Results</div>
                      </div>
                      <div className="p-4 bg-surface border border-border rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">$480</div>
                        <div className="text-sm text-text-muted">Spent This Year</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success-500" />
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      {[
                        { title: 'Prescription ready for pickup', time: '2 hours ago', type: 'prescription' },
                        { title: 'Lab results available', time: 'Yesterday', type: 'lab' },
                        { title: 'Appointment confirmed', time: '3 days ago', type: 'appointment' },
                        { title: 'Payment processed', time: '1 week ago', type: 'payment' },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-surface-hover rounded-lg hover:bg-surface-hover/80 transition-colors">
                          <div className={cn(
                            'w-10 h-10 rounded-lg flex items-center justify-center',
                            activity.type === 'prescription' && 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                            activity.type === 'lab' && 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
                            activity.type === 'appointment' && 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
                            activity.type === 'payment' && 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
                          )}>
                            {activity.type === 'prescription' && <span className="text-lg">💊</span>}
                            {activity.type === 'lab' && <span className="text-lg">🧪</span>}
                            {activity.type === 'appointment' && <span className="text-lg">📅</span>}
                            {activity.type === 'payment' && <span className="text-lg">💳</span>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-text-primary text-sm">{activity.title}</p>
                            <p className="text-xs text-text-muted">{activity.time}</p>
                          </div>
                          <MoreHorizontal className="h-5 w-5 text-text-muted" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-surface border border-border rounded-xl p-5 sticky top-24">
                    <h3 className="font-semibold text-text-primary mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Book Appointment', icon: '📅', primary: true },
                        { label: 'View Prescriptions', icon: '💊', primary: false },
                        { label: 'Medical Records', icon: '📋', primary: false },
                        { label: 'Payment History', icon: '💳', primary: false },
                        { label: 'Message Doctor', icon: '💬', primary: false },
                        { label: 'Update Profile', icon: '⚙️', primary: false },
                      ].map((action, i) => (
                        <button
                          key={i}
                          className={cn(
                            'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors',
                            action.primary
                              ? 'bg-primary-600 text-white hover:bg-primary-700'
                              : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                          )}
                        >
                          <span className="text-lg">{action.icon}</span>
                          <span className="font-medium">{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-surface border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-text-primary mb-4">Recommended for You</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Dr. James Chen', specialty: 'Dermatology', rating: 4.8 },
                        { name: 'Dr. Priya Sharma', specialty: 'Neurology', rating: 4.8 },
                        { name: 'Dr. Michael Okafor', specialty: 'Orthopedics', rating: 4.7 },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-hover transition-colors">
                          <Avatar name={doc.name} size="sm" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-text-primary truncate">{doc.name}</p>
                            <div className="flex items-center gap-1 text-xs text-text-muted">
                              <span>{doc.specialty}</span>
                              <Star className="h-3 w-3 fill-current text-warning-500" />
                              <span>{doc.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -top-8 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}