interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
}

interface MessageListProps {
  conversations: Conversation[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export default function MessageList({
  conversations,
  selectedId,
  onSelect,
}: MessageListProps) {
  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={`p-3 rounded-lg cursor-pointer hover:bg-muted ${
            selectedId === conversation.id ? "bg-muted" : ""
          }`}
          onClick={() => onSelect(conversation.id)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
              {conversation.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium truncate">{conversation.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {conversation.timestamp}
                </span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread > 0 && (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs text-primary-foreground">
                  {conversation.unread}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}