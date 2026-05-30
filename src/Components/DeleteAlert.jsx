"use client";

import { revalidateDashboard } from "@/app/action";
import {AlertDialog, Button, toast} from "@heroui/react";

export function DeleteAlert({ apt, setAppointmentList }) {

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5002/appointments/${apt._id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.deletedCount > 0) {
      setAppointmentList(prev => prev.filter(item => item._id !== apt._id));
      await revalidateDashboard();
      toast.success("Appointment deleted successfully!");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="md:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete appointment for <strong>{apt.doctorName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}