import { formatDistanceToNow } from "date-fns";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border ${
            notification.read ? "bg-background" : "bg-muted"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 p-2 rounded-full ${
                  notification.read
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.message}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {formatDistanceToNow(new Date(notification.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
            {!notification.read && (
              <Button variant="ghost" size="icon">
                <Check className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}