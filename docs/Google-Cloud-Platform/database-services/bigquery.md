---
sidebar_position: 1
---

# BigQuery
BigQuery’s serverless architecture decouples storage and computing and allows them to scale independently on demand, which offers both immense flexibility and cost controls for customers.

<img src="/img/gcp-docs/bigquery-architecture.png" alt="BigQuery Architecture" />

BigQuery employs a vast set of multi-tenant services like Dremel, Colossus, Jupiter and Borg.

### Capacitor (columnar format)
- BigQuery stores data in a columnar storage format called Capacitor. The capacitor allows BQ to store and efficiently query semi-structured data with nested and repeated fields. Each column in a BQ table is stored in a separate Capacitor file, which enables high compression ratios and fast scan throughput. Capacitor allows BQ to directly operate on compressed data without the need to decompress it on the fly. 

- The capacitor encodes each column by collecting statistics about the data and storing two numbers, called the definition and repetition levels, in addition to the column’s value. These statistics are used during query execution to optimize the query plan and choose the most efficient runtime algorithms. Once all of the column data has been encoded, it is encrypted and written to Colossus.

- BigQuery is primarily designed for read-only use cases because its columnar storage format does not allow for updates to existing records.

### Colossus (storage)
- BigQuery leverages the columnar storage format and compression algorithm to store data in Colossus, optimized for reading large amounts of structured data.

- Colossus, Google’s latest-generation distributed file system, is designed to be reliable and fault-tolerant. It replaced the previous Google File System (GFS) and is capable of handling cluster-wide replication, recovery from disk crashes, and distributed management.

### Dremel (execution engine)
- Dremel turns SQL queries into execution trees. The leaves of the tree are called slots and do the heavy lifting of reading data from storage and any necessary computation. The branches of the tree are ‘mixers’, which perform the aggregation.

<img 
  src="/img/gcp-docs/dremel.png" 
  alt="Dremel" 
  style={{
    display: "block",
    margin: '0 auto',
  }}
/>

Let’s understand the query execution with a simple example:

1. A user submits a query to BigQuery, such as SELECT COUNT(*) FROM mytable WHERE timestamp > ‘2021–01–01’.
2. The query is received by the root node of the Dremel serving tree, which is the starting point for query execution.
3. The root node routes the query to the intermediate nodes (or mixers) of the serving tree. These nodes perform query optimization and rewrite the query to include horizontal partitions of the table and partial aggregation and filtering.
4. In this example, the query optimizer might decide to partition the table based on the timestamp column and only include the partitions that have timestamps greater than ‘2021–01–01’.
5. The intermediate nodes then send the rewritten query to the leaf nodes for execution. The leaf nodes read the relevant partitions of the table from Colossus and perform the filters and final aggregation specified in the query.
6. In this example, the leaf nodes would count the number of rows in the partitions that have timestamps greater than ‘2021–01–01’ and return the result to the intermediate nodes.
7. The intermediate nodes then pass the results back up the serving tree to the root node, which returns the final result of the query, such as “COUNT(*) = 1000000”, to the user.
8. The query optimizer ensures that the query can be executed within the constraints of the system and also that it’s the most efficient way to execute the query.

### Borg (compute)
- Borg is Google’s large-scale cluster management system. Borg simultaneously runs thousands of Dremel jobs across one or more clusters made up of tens of thousands of machines. In addition to assigning compute capacity for Dremel jobs, Borg handles fault tolerance.

###  Jupiter (network)
- BigQuery requires an ultra-fast network which can deliver terabytes of data in seconds directly from storage into compute for running Dremel jobs. Google’s Jupiter network enables BigQuery service to utilize 1 Petabit/sec of total bisection bandwidth.
  
<img 
  src="/img/gcp-docs/bigquery-architecture2.png" 
  alt="Dremel" 
  style={{
    display: "block",
    margin: '0 auto',
  }}
/>