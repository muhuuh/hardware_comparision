# Performance Benchmarks and Specifications for AI Desktop Computers

## GPU Performance Benchmarks for LLM Inference

Based on Puget Systems' testing of various NVIDIA GPUs for LLM inference workloads using llama.cpp with Microsoft's Phi-3-mini-4k-instruct model:

### Prompt Processing Performance (tokens per second - higher is better)
| GPU | Performance | Relative to RTX 4090 |
|-----|-------------|----------------------|
| RTX 4090 24GB | 10,324 | 100% |
| RTX 4080 SUPER 16GB | 8,033 | 77.8% |
| RTX 4080 16GB | 7,563 | 73.3% |
| RTX 4070 Ti SUPER 16GB | 6,566 | 63.6% |
| RTX 4070 Ti 12GB | 5,733 | 55.5% |
| RTX 3080 Ti 12GB | 5,456 | 52.8% |
| RTX 4070 SUPER 12GB | 5,165 | 50.0% |
| RTX 4070 12GB | 4,458 | 43.2% |
| RTX 2080 Ti 11GB | 3,373 | 32.7% |
| RTX 4060 Ti 8GB | 3,250 | 31.5% |
| RTX 4060 8GB | 2,527 | 24.5% |

### Token Generation Performance (tokens per second - higher is better)
| GPU | Performance | Relative to RTX 4090 |
|-----|-------------|----------------------|
| RTX 4090 24GB | 225 | 100% |
| RTX 3080 Ti 12GB | 192 | 85.3% |
| RTX 4080 SUPER 16GB | 189 | 84.0% |
| RTX 4080 16GB | 180 | 80.0% |
| RTX 4070 Ti SUPER 16GB | 175 | 77.8% |
| RTX 4070 Ti 12GB | 143 | 63.6% |
| RTX 4070 SUPER 12GB | 142 | 63.1% |
| RTX 4070 12GB | 141 | 62.7% |

### GPU Technical Specifications
| GPU | FP16 (TFLOPS) | Tensor Core Count | Tensor Core Generation | Memory Bandwidth (GB/s) |
|-----|---------------|-------------------|------------------------|-------------------------|
| RTX 4090 | 82.58 | 512 | 4th | 1008.4 |
| RTX 4080 SUPER | 52.22 | 320 | 4th | 736.3 |
| RTX 4080 | 48.74 | 304 | 4th | 716.8 |
| RTX 4070 Ti SUPER | 44.10 | 264 | 4th | 672.3 |
| RTX 4070 Ti | 40.09 | 240 | 4th | 504.2 |
| RTX 3080 Ti | 34.10 | 320 | 3rd | 912.4 |
| RTX 4070 SUPER | 35.48 | 224 | 4th | 504.2 |
| RTX 4070 | 29.15 | 184 | 4th | 504.2 |

## Detailed Specifications for Top Desktop Options

### 1. Skytech Chronos
- **Price**: $2,799.99 (approximately €2,580)
- **GPU**: NVIDIA RTX 5080
- **GPU Performance**: Expected to be 8-10% faster than RTX 4080 SUPER for general workloads, up to 2x faster for AI-accelerated tasks
- **GPU Memory**: 16GB GDDR6X
- **CPU**: AMD Ryzen 7 9800X3D
- **CPU Cores/Threads**: 8 cores / 16 threads
- **CPU Clock Speed**: 4.7 GHz base, up to 5.2 GHz boost
- **RAM**: 32GB DDR5-6000
- **Storage**: 2TB M.2 PCIe 4.0 NVMe SSD + 6TB HDD
- **Cooling**: Liquid-cooled CPU
- **Power Supply**: Not specified, likely 850W+
- **Dimensions**: Not specified
- **Warranty**: 1 year

### 2. Lenovo Legion Tower 7i (Gen 10)
- **Price**: £2,779.99 (approximately €3,300)
- **GPU**: RTX 5080
- **GPU Memory**: 16GB GDDR6X
- **CPU**: Up to Intel Core Ultra 9 285K
- **CPU Cores/Threads**: Up to 24 cores / 32 threads
- **CPU Clock Speed**: Up to 5.7 GHz boost
- **RAM**: Up to 64GB DDR5-6400
- **Storage**: Up to 2TB M.2 PCIe 4.0 NVMe
- **Motherboard**: ATX
- **Power Supply**: Up to 1200W
- **Cooling**: Liquid cooling
- **Dimensions**: Not specified
- **Warranty**: 1 year

### 3. NZXT Player PC
- **Price**: From $2,999 (approximately €2,760)
- **GPU**: RTX 5080 or RTX 5090
- **GPU Memory**: 16GB GDDR6X (5080) or 24GB GDDR6X (5090)
- **CPU**: AMD Ryzen 7 9800X3D
- **CPU Cores/Threads**: 8 cores / 16 threads
- **CPU Clock Speed**: 4.7 GHz base, up to 5.2 GHz boost
- **RAM**: 32GB DDR5-6000
- **Storage**: 2TB M.2 PCIe 4.0 NVMe
- **Motherboard**: B650
- **Power Supply**: 850W or 1000W
- **Cooling**: NZXT Kraken liquid cooling
- **Dimensions**: Not specified
- **Warranty**: 2 years

### 4. CLX SET Gaming Desktop
- **Price**: $2,799.99 (approximately €2,580)
- **GPU**: NVIDIA GeForce RTX 4070 Ti
- **GPU Memory**: 12GB GDDR6X
- **GPU Performance**: 5,733 tokens/sec for prompt processing, 143 tokens/sec for generation
- **CPU**: Intel Core i7 14700KF
- **CPU Cores/Threads**: 20 cores (8P+12E) / 28 threads
- **CPU Clock Speed**: Up to 5.6 GHz boost
- **RAM**: 32GB DDR5 5600 Memory
- **Storage**: 2TB NVMe M.2 SSD + 6TB HDD
- **Cooling**: Not specified
- **Color**: White
- **Dimensions**: Not specified
- **Warranty**: Not specified

### 5. Allied Gaming Patriot Gaming Desktop
- **Price**: $2,049.99 (approximately €1,890)
- **GPU**: NVIDIA GeForce RTX 4070 Ti
- **GPU Memory**: 12GB GDDR6X
- **GPU Performance**: 5,733 tokens/sec for prompt processing, 143 tokens/sec for generation
- **CPU**: Intel Core i7-13700F
- **CPU Cores/Threads**: 16 cores (8P+8E) / 24 threads
- **CPU Clock Speed**: Up to 5.2 GHz boost
- **RAM**: 16GB DDR5
- **Storage**: 1TB NVMe SSD
- **Color**: White
- **Dimensions**: Not specified
- **Warranty**: Not specified

### 6. BIZON G3000
- **Price**: Starting at $3,090 (approximately €2,850)
- **GPU**: Up to 2x NVIDIA RTX 5090, 4090, RTX 6000 Ada
- **GPU Memory**: Up to 48GB GDDR6X
- **CPU**: AMD Ryzen 9000 Series
- **RAM**: Up to 192GB
- **Storage**: Not specified
- **Cooling**: Not specified
- **Dimensions**: Not specified
- **Warranty**: Not specified
- **Note**: Specifically designed for AI/ML workloads with pre-installed frameworks

## Performance Comparison for AI Inference

Based on the benchmark data, we can estimate relative performance for AI inference workloads:

1. Systems with RTX 5090: Highest performance, approximately 15-20% faster than RTX 4090
2. Systems with RTX 5080: Approximately 8-10% faster than RTX 4080 SUPER
3. Systems with RTX 4090: Excellent performance, baseline for high-end AI inference
4. Systems with RTX 4080 SUPER: About 78% of RTX 4090 performance for prompt processing, 84% for token generation
5. Systems with RTX 4080: About 73% of RTX 4090 performance for prompt processing, 80% for token generation
6. Systems with RTX 4070 Ti SUPER: About 64% of RTX 4090 performance for prompt processing, 78% for token generation
7. Systems with RTX 4070 Ti: About 56% of RTX 4090 performance for prompt processing, 64% for token generation

## Key Performance Indicators (KPIs) for AI Inference Desktops

1. **Prompt Processing Speed**: Measured in tokens per second, indicates how quickly the system can process input prompts
2. **Token Generation Speed**: Measured in tokens per second, indicates how quickly the system can generate output text
3. **GPU Memory (VRAM)**: Determines the size of AI models that can be loaded (larger models require more VRAM)
4. **FP16 Performance**: Measured in TFLOPS, indicates the GPU's computational power for AI workloads
5. **Memory Bandwidth**: Affects how quickly data can be moved to and from GPU memory
6. **CPU Performance**: Important for data preprocessing and non-GPU accelerated tasks
7. **System RAM**: Affects ability to handle large datasets before processing
8. **Storage Speed**: Affects model loading times and data access speeds
9. **Cooling Efficiency**: Determines sustained performance under heavy AI workloads
10. **Power Efficiency**: Affects operational costs for running AI inference workloads
