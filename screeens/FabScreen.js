import * as React from "react";
import { FAB, Portal, Provider as PaperProvider } from "react-native-paper";

const FabGroup = () => {
  const [open, setOpen] = React.useState(false);

  const onStateChange = ({ open }) => setOpen(open);

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "calendar-today" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Email",
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
              console.log("FAB is open");
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FabGroup;
