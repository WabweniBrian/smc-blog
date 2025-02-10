"use client"

import { useState } from "react"
import { Phone, Plus, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type EmergencyContact = {
  id: string
  name: string
  relationship: string
  phoneNumber: string
}

export function EmergencyContactList() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    { id: "1", name: "John Doe", relationship: "Father", phoneNumber: "+1234567890" },
    { id: "2", name: "Jane Smith", relationship: "Spouse", phoneNumber: "+0987654321" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingContact, setEditingContact] = useState<EmergencyContact | null>(null)
  const [newName, setNewName] = useState("")
  const [newRelationship, setNewRelationship] = useState("")
  const [newPhoneNumber, setNewPhoneNumber] = useState("")

  const handleAddContact = () => {
    const newContact: EmergencyContact = {
      id: Date.now().toString(),
      name: newName,
      relationship: newRelationship,
      phoneNumber: newPhoneNumber,
    }
    setContacts([...contacts, newContact])
    setNewName("")
    setNewRelationship("")
    setNewPhoneNumber("")
    setIsDialogOpen(false)
  }

  const handleEditContact = () => {
    if (editingContact) {
      const updatedContacts = contacts.map((contact) =>
        contact.id === editingContact.id
          ? { ...contact, name: newName, relationship: newRelationship, phoneNumber: newPhoneNumber }
          : contact,
      )
      setContacts(updatedContacts)
      setEditingContact(null)
      setNewName("")
      setNewRelationship("")
      setNewPhoneNumber("")
      setIsDialogOpen(false)
    }
  }

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div>
      <div className="mb-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Emergency Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingContact ? "Edit Emergency Contact" : "Add Emergency Contact"}</DialogTitle>
              <DialogDescription>
                {editingContact ? "Edit the emergency contact details." : "Add a new emergency contact for riders."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={newName} onChange={(e) => setNewName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="relationship" className="text-right">
                  Relationship
                </Label>
                <Input
                  id="relationship"
                  value={newRelationship}
                  onChange={(e) => setNewRelationship(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={editingContact ? handleEditContact : handleAddContact}>
                {editingContact ? "Save Changes" : "Add Contact"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Relationship</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">{contact.name}</TableCell>
              <TableCell>{contact.relationship}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  {contact.phoneNumber}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingContact(contact)
                    setNewName(contact.name)
                    setNewRelationship(contact.relationship)
                    setNewPhoneNumber(contact.phoneNumber)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteContact(contact.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

