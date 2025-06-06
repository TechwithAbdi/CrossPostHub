import prisma from "@/config/prismaConfig";

type createNotificationProps = {
  userId: string;
  type: "POST_STATUS_PROCESSING" | "POST_STATUS_SUCCESS" | "POST_STATUS_FAILED" | "SYSTEM_ALERT";
  message: string;
};

export const createNotification = async ({message,type,userId}: createNotificationProps) => {
    return await prisma.notification.create({
        data: {
            message,
            type,
            userId
        }
    });
};

export const markNotificationsAsRead = async () => {
  await prisma.notification.updateMany({
    where: { read: false },
    data: { read: true },
  });
};
