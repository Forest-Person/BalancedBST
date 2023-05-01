//Balanced binary search tree

class NodeTree{

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null
        
    }



}

class BalancedBST {

 constructor(){
    this.root = null
 }

 insert(value){

   let newNode = new NodeTree(value)

   

    if(this.root === null){
       this.root = newNode
       return this.root
        
    }else{
       return this.insertNode(this.root,newNode)
    }
    
    




 }

    insertNode(root,newNode){

        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{return this.insertNode(root.left,newNode)}

        }

        if(newNode.value > root.value){
            if(root.right === null){
                root.right = newNode
            }else{return this.insertNode(root.right,newNode)}
        }
return root


    }

    insertion(val,root){

        if(this.root === null){
            this.root = new NodeTree(val)
            
        }
         if(val < this.root.value){
            if(this.root.left === null){
           this.root.left = new NodeTree(val)
           
         }else{this.insertion(val,this.root.left)}
       
         }
       
    
    }


    sortedToBST(arr,start,end) {
        
            arr = arr.sort((a,b)=>a-b)

            let newArr = [...arr]

            if(start > end){return null}

            let mid  = Math.round((start + end) / 2);

            let node = new NodeTree(newArr[mid])

            node.left = this.sortedToBST(newArr, start, mid -1)

            node.right = this.sortedToBST(newArr, mid + 1, end)

            this.root = node
            
            return this.root

            }



}


const balancedBST = new BalancedBST()


/*
Compare the value with the root of the BST.

If the value to be inserted is less than the root, move to the left subtree. 

Otherwise, if the value is greater than the root, move to the right subtree.

Continue this process, until we hit a leaf node.

Now if the value is greater than the leaf, create a 
left child of the leaf and insert the value. 

Otherwise, if the value is greater than the leaf, 
create a right child of the leaf and insert the value in the right child.
*/




  const prettyPrint = (node, prefix = '', isLeft = true) => { //Function for pretty printing nodetree array
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.root}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }


  /*console.log(balancedBST.insert(33))
  console.log(balancedBST.insert(22))
  console.log(balancedBST.insert(21))
  console.log(balancedBST.insert(55))
  console.log(balancedBST.insert(576))
  prettyPrint(balancedBST.root)
 */

  console.log(balancedBST.insertion(66))
  console.log(balancedBST.insertion(3))
  console.log(balancedBST.root)

  //console.log(balancedBST.insertion(62))