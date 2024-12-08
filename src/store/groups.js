import { defineStore } from "pinia";
import { ref } from "vue";

export const useGroupStore = defineStore("groupStore", () => {
    const groups = ref([]);

    // Fetch groups from backend
    async function fetchGroups() {
        try {
            const response = await fetch("http://localhost:8080/api/groups"); // Update with your backend URL
            if (!response.ok) {
                throw new Error("Failed to fetch groups");
            }
            const data = await response.json();
            groups.value = data;
        } catch (error) {
            console.error("Error fetching groups:", error);
            groups.value = [];
        }
    }

    // Add a new group
    function addGroup(group) {
        const newGroup = {
            ...group, // Copy all group properties
            id: Date.now(), // Generate a unique ID
        };
        groups.value.push(newGroup); // Add the new group
        console.log("Added group:", newGroup); // Debug log
    }

    // Remove a group
    function removeGroup(groupId) {
        // Ensure groups are filtered correctly
        groups.value = groups.value.filter((group) => group.id !== groupId);
        console.log("Updated groups:", groups.value); // Debug log to ensure the group is removed
    }


    return {
        groups,
        fetchGroups,
        addGroup,
        removeGroup,
    };
});
