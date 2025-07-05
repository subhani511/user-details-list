 1. Lists

✅ Preparing Data
Store data in arrays (often from API or static JSON).
Ensure data is structured uniformly (e.g., array of objects).
Common use cases: rendering product lists, user profiles, tables, menus, etc.

✅ Rendering Lists
Use Array.prototype.map() to iterate and return components.
Wrap each item with a unique key.

✅ Conditional Rendering in Lists
Use filter() before map() if you want to display a subset: users.filter(user => user.active).map(...)

✅ Handling Empty Lists
Gracefully handle cases when arrays are empty: {users.length === 0 ? <p>No users found</p> : ...}

2. Keys

✅ Adding Unique Key
Keys help React identify which items changed, added, or removed.
Must be unique among siblings, not globally unique.
Best practice: use stable IDs from data (e.g., user.id), not indexes.

✅ Key Attribute Syntax
Always assign key to the outermost element returned by map(): <div key={item.id}>...</div>

✅ Why Not Index as Key (⚠️ Caution)
Indexes lead to performance and UI bugs (e.g., with item reordering).
Use index only when:
  a.The list is static
  b.Items do not get reordered
  c.No IDs are available

✅ Keys and Component Identity
Keys preserve component state between re-renders.
Changing key forces React to unmount and remount the component.

✅ Key in Fragment
When using <>...</> shorthand, you can’t pass a key. Use <React.Fragment key={...}> instead.
